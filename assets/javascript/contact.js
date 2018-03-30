/*Firebase*/
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC4XBBCRyWo1VroD2_qFq_WQZddQETCwz8",
    authDomain: "milestone1-199113.firebaseapp.com",
    databaseURL: "https://milestone1-199113.firebaseio.com",
    projectId: "milestone1-199113",
    storageBucket: "milestone1-199113.appspot.com",
    messagingSenderId: "501004776475"
  };
  
  firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// Initial Values
var name = "";
var email = "";
var comments = "";

// Capture Button Click
    $("#add-user").on("click", function(event) {
      // Don't refresh the page!
      event.preventDefault();

      name = $("#name-input").val().trim();
      email = $("#email-input").val().trim();
      comment = $("#comment-input").val().trim();

      database.ref().set({
        name: name,
        email: email,
        comment: comment
      });

    });

    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function(snapshot) {

      var db = snapshot.val();


      // Change the HTML to reflect
      $("#name-display").html(db.name);
      $("#email-display").html(db.email);
      $("#comment-display").html(db.comment);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });