    // START CODING BELOW!!

    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCrR1kyyBmRQpDRSswtOG_HB3q5qCPtwNk",
    authDomain: "milestone-f7ea3.firebaseapp.com",
    databaseURL: "https://milestone-f7ea3.firebaseio.com",
    projectId: "milestone-f7ea3",
    storageBucket: "milestone-f7ea3.appspot.com",
    messagingSenderId: "901683552649"
  };

    firebase.initializeApp(config);

    // Create a variable to reference the database
    var database = firebase.database();

    // Initial Values
    var username = "";
    var password = "";
    //var rememberMe = "";
    //var cancel = "";
    //var forgetPwd = "";




    // Capture Button Click
    $("#add-user").on("click", function(event) {
      // Don't refresh the page!
      event.preventDefault();

      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      username = $("#username-input").val().trim();
      password = $("#password-input").val().trim();
      //comment = $("#comment-input").val().trim();

      database.ref().set({
        username: username,
        password: password,
        //comment: comment
      });

    });

    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function(snapshot) {

      var db = snapshot.val();


      // Change the HTML to reflect
      $("#username-display").html(db.username);
      $("#password-display").html(db.password);
      //$("#comment-display").html(db.comment);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

