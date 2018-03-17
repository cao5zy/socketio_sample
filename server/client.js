(function(socket){
    socket.on("news", function (data){
	$("#msg").text(data.message);
    });

    socket.on("message__", (data)=>{
	$("#msg").text(data.message);
    });

    $(document).ready(()=>{
	$("#send").click(function(){
	    socket.emit("__message", { message: $("#message").val()});
	});
    });
    
}(io("http://23.102.229.204:8081")));
