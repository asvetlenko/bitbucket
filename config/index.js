/**
 * Created by we on 27-Dec-15.
 */
var nconf = require('nconf'),
    path = require('path');

nconf.argv()
    .env()
    .file({file: path.join(__dirname, 'config.json')});

module.exports = nconf;
