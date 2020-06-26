const router = require('../routes');

module.exports = (app) => {
    app.use('/home', router.home);

    app.use('/user', router.users);

    app.use('/tripp', router.tripps);

    //app.use('*', (req, res, next) => {
       // res.send('<h1>NOOOOOOO</h1>')
   // })
};