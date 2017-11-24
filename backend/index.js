const http = require('http');
const { app } = require('./app');
const { improvedEnv } = require('./env');

const server = http.createServer(app);

server.listen(improvedEnv.APP_PORT, () => {
    console.log(
        ('App is running at http://localhost:%d in %s mode'),
        improvedEnv.APP_PORT, improvedEnv.NODE_ENV,
    );
});