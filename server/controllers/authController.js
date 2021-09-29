const User = require('../models/user');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');

const maxAge = 3 * 24 * 3600;

const createToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: maxAge
    });
}

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
    //duplicate signup error
    if(err.code === 11000) {
        errors.email = "Email already exists";
        return errors;
    }
    if(err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        })
    }
    return errors;
}

module.exports = {
    signup: async (req, res) => {
        const { name, email, password, phone = "-" } = req.body;
        
        try {
            const user = await User.create({ name, email, password, phone });
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(201).json({ user: user._id });
        }
        catch (err) {
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
        }
        catch (err) {
            const errors = handleErrors(err);
            res.status(400).json({ errors });
        }
    },
    logout: (req, res) => {
        res.cookie(jwt, '', { maxAge: 1 });
        res.redirect('/');
    },
};