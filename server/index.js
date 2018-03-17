(function(factory){
    module.exports = factory(require('http'), require('socket.io'), require('fs'));
}(function(http, socket, fs){
    function handler (req, res) {
	fs.readFile(__dirname + '/index.html',
		    function (err, data) {
			if (err) {
			    res.writeHead(500);
			    return res.end('Error loading index.html');
			}

			res.writeHead(200);
			res.end(data);
		    });
    }
    
    (function(app){
	(function(socketio){
	    app.listen(8081);
	    
	    socketio.on("connection", function(skt){
		skt.emit("news", {message: "connected!!! we can talk"});

		skt.on("__message", function(data){
		    skt.emit("messsage__", { message: data});
		});
	    });
	}(socket(app)));
    }(http.createServer(handler)));
}));
