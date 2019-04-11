'use strict';

const Hapi      = require('hapi');
const Routes    = require('./src/routes');
const Models    = require('./src/models/');


const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route(Routes);
    
    Models.sequelize.sync().then(() => {
      server.start((err) => {
        console.log(`Server running at: ${server.info.uri}`);
      });
    });

    console.log('Server running on %ss', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();