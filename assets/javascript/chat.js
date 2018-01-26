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

  $("#click-button").on("click", function() {

    //  Store Click Data to Firebase in a JSON property called clickCount
    // Note how we are using the Firebase .set() method
    database.ref().set({
      clickCount: chatMessage
    });
  });