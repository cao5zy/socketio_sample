(function(factory) {
    module.exports = factory(require('http'), require('socket.io'), require('fs'));
}(function(http, socket, fs) {
    function handler(req, res) {
        function geturl() {
            return req.url == "/" ? "/client.html" :
                req.url
        }

        function log(url) {
            console.log('url:', url);
            return url;
        }

        fs.readFile(__dirname + log(geturl()),
            function(err, data) {
                if (err) {
                    res.writeHead(500);
                    return res.end('Error loading index.html');
                }

                res.writeHead(200);
                res.end(data);
            });
    }

    (function(app) {
        (function(socketio) {
            app.listen(8081);
            console.log('start to listen 8081');

            socketio.on("connection", function(skt) {
                skt.emit("news", {
                    message: "connected!!! we can talk"
                });

                skt.on("__message", function(data) {
                    console.log('got message:', data);
                    setTimeout(() => {
                        skt.emit("message__", {
                            message: data.message + " after 5 seconds"
                        });
                    }, 5000);

                });
            });
        }(socket(app)));
    }(http.createServer(handler)));
}));