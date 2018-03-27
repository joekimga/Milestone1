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
  