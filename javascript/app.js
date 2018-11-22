$(document).ready(function () {

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAkeOji6fNofjU6hg6Y8ir1hot5SMeTPG4",
      authDomain: "picyourpoison-67571.firebaseapp.com",
      databaseURL: "https://picyourpoison-67571.firebaseio.com",
      projectId: "picyourpoison-67571",
      storageBucket: "picyourpoison-67571.appspot.com",
      messagingSenderId: "41383692048"
    };
    firebase.initializeApp(config);
 
    // var dataRef = firebase.database();
 
    $("#uploadModal").hide();
    $("#drink-button").hide();
 
 
 
    var storageRef = firebase.storage().ref();
 
    function imgSwap(image){
      $("#card-image").attr('src', image);
 
    }
 
 
 
 
    $("#uploadBtn").on("click", function () {
      event.preventDefault();
     
      var newImg = $('#imageInput')[0].files;
      console.log(newImg[0].name)
      
      var file = newImg[0];
 
 
      // Create the file metadata
      var metadata = {
        contentType: 'image/jpeg'
      };
 
      // Upload file and metadata to the object 'images/mountains.jpg'
      var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
 
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        },
        function (error) {
          console.log(error);
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
 
            case 'storage/canceled':
              // User canceled the upload
              break;
 
 
 
            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        function () {
          
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log('File available at', downloadURL);
            imgSwap(downloadURL);
            $('#uploadModal').modal('hide')
 
            $(".card-text").text("Your emotion: Happy! Great, let's celebrate");
            $("#drink-button").show();
            
          });
        });
 
      console.log(newImg);
 
    });
 
 
 
 
 
 
 
 
 
 
 
 
 
  })