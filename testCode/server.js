var express = require('express');
var socket = require('socket.io');

//Port settings
var PORT = process.env.PORT || 8080;

//App setup
var app = express();
var server = app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

// Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });
  
// Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

});