var express = require('express');
var socket = require('socket.io');
var methodOverride = require('method-override');
var bodyParser = require("body-parser"); 

//Port settings
var PORT = process.env.PORT || 8080;

//App setup
var app = express();
app.use(methodOverride('_method'));


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//Set up express to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

// Import routes and give the server access to them.
var routes = require("./controllers/html-routes.js");


// var server = express()
//   .use((req, res) => res.sendFile(INDEX) )
//   .listen(PORT, () => console.log(`App now listening on ${ PORT }`));

// var io = socketIO(server);

// io.on('connection', (socket) => {
//   console.log('Client connected');
//   socket.on('disconnect', () => console.log('Client disconnected'));
// });

// var socket = io();
// var el = document.getElementById('server-time');

// socket.on('time', function(timeString) {
//   el.innerHTML = 'Server time: ' + timeString;
// });

app.use(routes);

var server = app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

 //Socket setup & pass server
var io = socket(server);
io.on('connection', function(socket) {

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

// Handle tweet event
    socket.on('tweet', function(data){
        socket.broadcast.emit('tweet', data);
    });

});




