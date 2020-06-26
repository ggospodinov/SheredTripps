//const env = process.env.NODE_ENV || 'development';

require('./config/database')().then(() => {
    const config = require('./config/config')
    const app = require('express')();
    const appString=`Server is ready! Listening on port: ${config.port}`

    require('./config/express')(app);
    require('./config/routes')(app);

    app.listen(config.port, console.log(appString));
});