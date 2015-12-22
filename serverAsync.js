/**
 * Created by alexey.svetlenko on 21.12.2015.
 */

// http://127.0.0.1/echo?message=Hello -> Hello

var http = require('http'),
    fs = require('fs');

var server = new http.Server();

server.on('request', function (req, res) {
    if (req.url === '/') {
        fs.readFile('index.html', function (err, info) {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end("Server error!!!!");
                return;
            }

            res.end(info);
        });
    }
});

server.listen(1337, '127.0.0.1');
