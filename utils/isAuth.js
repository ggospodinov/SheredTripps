const jwt = require('./jwt');
const { cookie } = require('../config/config');
const User = require('../handlers/users/User');

module.exports = (jistContinue = false) => {
    return function (req, res, next) {
        const token = req.cookies[cookie] || '';

        jwt.verifyToken(token).then((result) => {
            User.findById(result._id).then((user) => {
                req.user = user;
                next();

            })
        })
            .catch((err) => {
                if(jistContinue){
                    next();
                    return;
                }
                res.redirect('/user/login')

            });

    }


    Promise.all([
        jwt.verifyToken(token),
    ]).then(([data]) => {
        models.User.findById(data.id).then(user => {
            req.user = user;
            next();
        });
    }).catch(err => {
        if (!redirectUnauthenticated) { next(); return; }
        next(err);
    });
};
