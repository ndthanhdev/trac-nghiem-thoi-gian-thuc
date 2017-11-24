/**
 * Module dependencies.
 */
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const path = require('path');
const compression = require('compression');

/**
 * Controllers (route handlers).
 */
const homeController = require("./controllers/home");

const createExpressApp = () => {
    const app = express();

    app.use(compression());
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(errorHandler());

    app.get('/', homeController.index);

    return app;
};

exports.app = createExpressApp();