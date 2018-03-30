$('#instagram-button').on('click', function() {
  // Initialize with your OAuth.io app public key
  OAuth.initialize('YOUR_OAUTH_KEY');
  // Use popup for OAuth
  OAuth.popup('instagram').then(instagram => {
    console.log('instagram:', instagram);
    // Prompts 'welcome' message with User's name on successful login
    // #me() is a convenient method to retrieve user data without requiring you
    // to know which OAuth provider url to call
    instagram.me().then(data => {
      console.log('me data:', data);
      alert('Instagram says your name is ' + data.name + ".\nView browser 'Console Log' for more details");
    });
    // Retrieves user data from OAuth provider by using #get() and
    // OAuth provider url
    instagram.get('/v1/users/self').then(data => {
      console.log('self data:', data);
    })
  });
})