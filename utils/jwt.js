const jwt = require('jsonwebtoken');
const { secret } = require('../config/config')

function createToken(data) {
    return jwt.sign({ _id: data._id }, secret, { expiresIn: '3h' });
}

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, data) => {
            if (err) { reject(err); return; }
            resolve(data);
        });
    });
}

module.exports = {
    createToken,
    verifyToken
}