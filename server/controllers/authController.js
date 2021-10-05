const User = require('../models/user');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const maxAge = 3 * 24 * 3600;

const createToken = (user) => {
    return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: maxAge,
    });
};

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
    //login errors
    if (err.message === 'Social error') {
        errors.password = 'Account created through Google account';
        return errors;
    }
    if (err.message === 'Incorrect email') {
        errors.email = 'Incorrect email';
        return errors;
    }
    if (err.message === 'Incorrect password') {
        errors.password = 'Incorrect password';
        return errors;
    }
    //duplicate signup errors
    if (err.code === 11000) {
        errors.email = 'Email already exists';
        return errors;
    }
    if (err.message.includes('users validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            console.log('the error: ', properties);
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

module.exports = {
    signup: async (req, res) => {
        const { name, email, password, phone } = req.body;

        try {
            const user = await User.create({
                name,
                email,
                password,
                phone,
                isSocial: false,
            });
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(201).json({ user: user._id });
        } catch (err) {
            const errors = handleErrors(err);
            res.status(400).json({ errors });
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await User.login(email, password);
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(200).json({ user: user._id });
        } catch (err) {
            const errors = handleErrors(err);
            res.status(400).json({ errors });
        }
    },
    googleLogin: async (req, res) => {
        const { email, name } = req.body;
        const password = crypto.randomBytes(64).toString('hex');

        User.findOne({ email }).exec(async (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: 'Something went wrong',
                });
            } else {
                if (user) {
                    const token = createToken(user._id);
                    res.cookie('jwt', token, {
                        httpOnly: true,
                        maxAge: maxAge * 1000,
                    });
                    res.status(200).json({ user: user._id });
                } else {
                    const user = await User.create({
                        name,
                        email,
                        password,
                        phone: '999999999',
                        isSocial: true,
                    });
                    const token = createToken(user._id);
                    res.cookie('jwt', token, {
                        httpOnly: true,
                        maxAge: maxAge * 1000,
                    });
                    res.status(201).json({ user: user._id });
                }
            }
        });
    },
    logout: (req, res) => {
        res.header('Access-Control-Allow-Origin', 'https://invoice-app-vignesh.netlify.app');
        res.cookie('jwt', '', { httpOnly: true, maxAge: 1 });
        res.status(200).send({ message: 'logged out' });
    },
    authCheck: (req, res) => {
        if (req.cookies && req.cookies.jwt) {
            jwt.verify(
                req.cookies.jwt,
                process.env.ACCESS_TOKEN_SECRET,
                (err) => {
                    if (err) {
                        res.json({ isAuth: false });
                    } else {
                        const expiration = jwt.decode(req.cookies.jwt).exp;
                        const expirationDate = new Date(expiration * 1000);
                        res.json({ isAuth: expirationDate > Date.now() });
                    }
                }
            );
        } else {
            res.json({ isAuth: false });
        }
    },
    getUser: (req, res, next) => {
        if (req.cookies && req.cookies.jwt) {
            jwt.verify(
                req.cookies.jwt,
                process.env.ACCESS_TOKEN_SECRET,
                (err) => {
                    if (err) {
                        console.log('invalid token');
                        next();
                    } else {
                        req.user = jwt.decode(req.cookies.jwt).user;
                        next();
                    }
                }
            );
        } else {
            console.log('token not found');
            next();
        }
    },
};
