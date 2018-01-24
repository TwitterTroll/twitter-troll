$(document).ready(function(){

    var database; 
    var scores = [];
        
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
    
      database = firebase.database();
    
      database.ref().orderByChild("numberCorrect").on('child_added', function(childSnapshot) {
          var childData;
          leaderboardList = [];
          childData = childSnapshot.val();
          leaderboardList.push({
            initials: childData.initials,
            numberCorrect: childData.numberCorrect,
          });
    
          var initialsLB = "<td>"+childData.initials+"</td>";
          var scoreLB = "<td>"+childData.numberCorrect+"</td>";        
          var scoreRow = $("<tr>"+initialsLB+scoreLB+"</tr>");
          $("#leaderboard").prepend(scoreRow);
      });
    });