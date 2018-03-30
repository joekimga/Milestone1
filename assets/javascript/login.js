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
    apiKey: "AIzaSyC4XBBCRyWo1VroD2_qFq_WQZddQETCwz8",
    authDomain: "milestone1-199113.firebaseapp.com",
    databaseURL: "https://milestone1-199113.firebaseio.com",
    projectId: "milestone1-199113",
    storageBucket: "milestone1-199113.appspot.com",
    messagingSenderId: "501004776475"
  };
  firebase.initializeApp(config);
</script>


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