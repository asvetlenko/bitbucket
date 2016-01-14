/**
 * Created by we on 27-Dec-15.
 */

var winston = require('winston');
var path = require('path');
var config = require('./../config');
var ENV = process.env.NODE_ENV;

function getLogger(module) {
    var modulePath = module.filename.split(path.sep).slice(-2).join('/');
    return new winston.Logger({
        transports: [
            new winston.transports.Console({
                colorize: true,
                level: ENV === 'development' ? 'debug' : 'error',
                label: modulePath
            })
        ]
    });
}

module.exports = getLogger;
