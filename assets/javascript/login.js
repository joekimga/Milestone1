/*Modal*/
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//////////////////////////////////////////////////

/*Firebase*/
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA_DT60r98EojCCROWjrgfoSW6DbLSPM_o",
    authDomain: "feb2018cbc.firebaseapp.com",
    databaseURL: "https://feb2018cbc.firebaseio.com",
    projectId: "feb2018cbc",
    storageBucket: "feb2018cbc.appspot.com",
    messagingSenderId: "82644971069"
  };
  firebase.initializeApp(config);


///////////////////////////////////////////////
//firebase




firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});
//(TAKE OUT ALERT!!!) 
//Firebase login 
  function login() {
  	//TESTING//////////////////////////////
  	var userEmail = document.getElementById("email_field").value;
  	var userPass = document.getElementById("password_field").value;
  	//window.alert(userEmail + " " + userPass);
  	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		// ...
  		window.alert("Error : " + errorMessage);
});
  }