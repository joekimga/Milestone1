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

    // Create a variable to reference the database
    var database = firebase.database();

    // Initial Values
    var name = "";
    var email = "";
    var comment = "";

    // Capture Button Click
    $("#add-user").on("click", function(event) {
      // Don't refresh the page!
      event.preventDefault();

      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
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



/*Firebase
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
*/
// Create a variable to reference the database.
//var database = firebase.database();

// Initial Values
//var name = "";
//var email = "";
//var comments = "";



/*
//  ES6 Testing///
//const database = firebase.database();
var database = firebase.database();

const initialUser = {
	name: "";
	email: "";
	comment: "";
};
*/


//const initDatabase = (user)



/*ESX6 Fail
const getValues = () => {
	return {
		name: $("#name-input").val().trim(),
		email: $("#email-input").val().trim(),
		comment: $("#comment-input").val().trim(),
	}
};

const setDbValues = (recentUser) => {

database.ref().set({
	name: recentUser.name,
    email: recentUser.email,
    comment: recentUser.comment
}).then(() => {
	$("#name-display").text(recentUser.name);
	$("#email-display").text(recentUser.email);
	$("#comment-display").text(recentUser.comment);

}).catch((err) => {
	console.log('Error setting db values -- ${err}');
});
};
*/


/*
      // Don't forget to provide initial data to your Firebase database.
      name = $("#name-input").val().trim();
      email = $("#email-input").val().trim();
      comment = $("#comment-input").val().trim();

      database.ref().set({
        name: name,
        email: email,
        comment: comment
      });

    });

database.ref().on("value", function(snapshot) {

      var db = snapshot.val();


      // Change the HTML to reflect
      $("#name-display").html(db.name);
      $("#email-display").html(db.email);
      //$("#age-display").html(db.age);
      $("#comment-display").html(db.comment);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
*/



// Capture Button Click
/*
    $("#add-user-comment").on("click", function(event) {
      // Don't refresh the page!
      event.preventDefault();


      //Tasks
      const recentUser = getValues();
      // Code in the logic for storing and retrieving the most recent user.
      setDbValues(recentUser);

  });



      //name = $("#name-input").val().trim();
     // email = $("#email-input").val().trim();
     // comment = $("#comment-input").val().trim();

      //database.ref().set({
        //name: name,
        //email: email,
       // comment: comment
      // name: recentUser.name,
      // email: recentUser.email,
      // comment: recentUser.comment
     // });

   // });

    // Firebase watcher + initial loader HINT: .on("value")
    //database.ref().on("value", function(snapshot) {
    	setDbValues(initialUser);

      //var db = snapshot.val();


      // Change the HTML to reflect
     // $("#name-display").html(db.name);
      //$("#email-display").html(db.email);
     // $("#comment-display").html(db.comment);

      // Handle the errors
   // }, function(errorObject) {
    //  console.log("Errors handled: " + errorObject.code);
    //});
    */