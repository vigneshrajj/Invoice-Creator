const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [isEmail, "Invalid Email"],
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [6, "Minimum 6 characters required"],
    },
    phone: {
        type: String,
    },
    isSocial: {
        type: Boolean,
    },
});

//hash password before saving
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

//static login
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if(user) {
        if(user.isSocial) throw Error('Social error');
        const auth = await bcrypt.compare(password, user.password);
        if(auth) {
            return user;
        }
        throw Error('Incorrect password');
    }
    throw Error('Incorrect email');
}

const User = mongoose.model('users', userSchema);

module.exports = User;