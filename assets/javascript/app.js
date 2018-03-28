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

//AJAX
  $.ajax({
      url: queryURL,
      method: "GET", API_KEY:"p4UY2y5GONsPOEJh-SfSOHFtq1hqy7n4pNfQh4pkpGBHAn2Vi_cks9rHO_yO2c20i8FbKrFUh8qQcx_Z3fCTqrdiGYhOvnV6SEgANAmWKNQwKoOzUBGy8BHAM8m7WnYx"
  }).then(updatePage);
  });