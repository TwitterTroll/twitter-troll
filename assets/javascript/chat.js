// Initialize Firebase
var config = {
apiKey: "AIzaSyBV_0I14cCrwUXBLhRC-giTDnquAxCHJVI",
authDomain: "twitter-troll.firebaseapp.com",
databaseURL: "https://twitter-troll.firebaseio.com",
projectId: "twitter-troll",
storageBucket: "twitter-troll.appspot.com",
messagingSenderId: "888156273211"
};
firebase.initializeApp(config);

var database = firebase.database();

var chatMessage = 'This is totally a chat!';

$("#send-message").on("click", function() {
    //  Store Message Data to Firebase in a JSON property called chat_message
    // Note how we are using the Firebase .set() method
    database.ref().set({
        chat_message: chatMessage
    });
});

database.ref().on("value", function(snapshot) {

    // Then we console.log the value of snapshot
    console.log(snapshot.val());

    // Then we change the html associated with the number.
    $("#click-value").text(snapshot.val().chat_message);

    // Then update the chatMessage variable with data from the database.
    chatMessage = snapshot.val().chat_message;

  // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
  // Again we could have named errorObject anything we wanted.
  }, function(errorObject) {

    // In case of error this will print the error
    console.log("The read failed: " + errorObject.code);
});