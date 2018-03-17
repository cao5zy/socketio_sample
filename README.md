# socketio_sample
 The most valuable point is that when the connection is recovered, the message notification works immediately without any manual detective code. That is to say, **you will never need a loop to check the connection in your code**.
 
The miracle of socket.io is on the connection.  
The "news" message is initialized in the server end. So each client can receive the message.  

    skt.emit("news", {
        message: "connected!!! we can talk"
    });

The "message__" is initialized in the event which is send from client. So only the client that emits the "__message" can receive the reply from the server.  

    skt.on("__message", function(data) {
		    console.log('got message:', data);
		    setTimeout(()=>{
			skt.emit("message__", {
                            message: data.message + " after 5 seconds"
			});
		    }, 5000);
                    
    });
 
Please go to [socket.io](https://socket.io/)
