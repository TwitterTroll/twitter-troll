//Make connection to websocket to frontend
var socket = io.connect('http://localhost:8080');
// var socket = io.connect('http://localhost:8080/for');
// var socket = io.connect('http://localhost:8080/against');
// Query DOM
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');
    tweet = document.getElementById('tweet');
// Emit events
btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});
  
message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
})

// Listen for events
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});

socket.on('tweet', function(data){
    tweet.innerHTML += '<div>' + data + '</div>';
});
