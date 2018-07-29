
  

  //firebase setup
  var config = {
    apiKey: "AIzaSyBJCMa5uF_NCiCpVjOWCZLpoS94t2-2Nyk",
    authDomain: "my-awesome-project-29c1e.firebaseio.com",
    databaseURL: "https://my-awesome-project-29c1e.firebaseio.com/",
    storageBucket: "gs://my-awesome-project-29c1e.appspot.com"
  };

  firebase.initializeApp(config);

  // Create a variable to reference the database.
  var database = firebase.database();

  // Initial Values
  var name = "";
  var email = "";
  var password = "";

  // Capture Button Click
  $("#Submit").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name = $("#usrname").val().trim();
    email = $("#emailAdd").val().trim();
    password = $("#psw").val().trim();

    // Code for handling the push
    database.ref().push({
      name: name,
      email: email,
      password: password,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

  });
    // Firebase watcher .on("child_added"
  database.ref().on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();
    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
