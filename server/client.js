(function(socket){
    socket.on("news", function (data){
	$("#msg").append("<p>" + data.message + "</p>");
    });

    socket.on("message__", (data)=>{
	console.log('message comes:', data);
	$("#msg").append("<p>" + data.message + "</p>");
    });

    $(document).ready(()=>{
	$("#send").click(function(){
	    socket.emit("__message", { message: $("#message").val()});
	});
    });
    
}(io("http://23.102.229.204:8081")));
