// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB4qdJoaD9yB2twI_ZxP65C0-tNj_vXumg",
    authDomain: "home-roasting-united.firebaseapp.com",
    databaseURL: "https://home-roasting-united.firebaseio.com",
    storageBucket: "home-roasting-united.appspot.com",
    messagingSenderId: "560968800961"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var connectionsRef = database.ref("/connections");
  var connectedUsers = database.ref(".info/connected");

  connectedUsers.on("value", function(snap){
      if (snap.val()) {
        var con = connectionsRef.push(true);
        con.onDisconnect().remove();
      }
  });

  