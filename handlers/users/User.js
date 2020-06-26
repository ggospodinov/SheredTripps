const mongoose = require('mongoose');
const { Schema, model: Model } = mongoose;
const { String, ObjectId } = Schema.Types
const bcrypt= require('bcrypt');
const saltRounds=10;


const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    trippHistory: [{
        type: ObjectId,
        ref: 'Tripp'
    }]

});

 userSchema.methods = {
   matchPassword: function (password) {
       return bcrypt.compare(password, this.password);
    }
 };

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) { next(err); return; }
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return; }
                this.password = hash;
                next();
            });
        });
        return;
    } next();
});

module.exports = new Model('User', userSchema);