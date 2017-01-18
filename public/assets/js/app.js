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
  var recipeRef = database.ref("/Recipes");

  connectedUsers.on("value", function(snap){
      if (snap.val()) {
        var con = connectionsRef.push(true);
        con.onDisconnect().remove();
      }
  });

connectionsRef.on("value", function(snap){
      if(snap.val()) {
        $("#first-row-cards").html('<div class="col-lg-3"><div class="card"><div class="card-block"><h2 class="card-title">Test Recipe Post</h2><h4 class="card-subtitle">Recipe might have a clickable link to it</h4></div><div class="card-block"><p>This recipe is for a roast for a Sumatra Blend that is rad</p><a href="#" class="card-link">Link to Recipe</a></div></div></div>');
      }
});

$("#submit-button").click(function(){
    recipeRef.push({
        name: $("#form-recipe-name").val(),
        date: $("#form-date").val(),
        batch_size: $("#form-batch-size").val(),
        roast_time: {
          minutes: $("#form-time-minutes").val(),
          seconds: $("#form-time-seconds").val()
        },
        roast_level: $("#form-roast-level").val(),
        roaster_settings: $("#form-roaster-settings").val(),
        preheat: $("#form-preheat").val(),
        yellowing: $("#form-yellowing").val(),
        browning: $("#form-browning").val(),
        first_crack: $("#form-first-crack").val(),
        first_crack_ends: $("#form-first-crack-ends").val(),
        end_drop: $("#form-end-drop").val(),
        notes: $("#form-notes").val()
        
    });
    // recipeForm.reset();
    return false;
});

recipeRef.on("child_added", function(snap){

});