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
            // callface();
        },


        function () {
          
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log('File available at', downloadURL);
            imgSwap(downloadURL);

        
            $('#uploadModal').modal('hide')

           
            
            $("#drink-button").show();
                 
            });
        
        
              console.log(newImg);
          });
       
            
        });

       


        function imgUR(){
          var clientID = "303995ac8d00703";
          var apiSecret= "82c3b7afac493f3c01f595c7f64cbaada95a7c2d";
          
          var queryURL = "https://api.imgur.com/3/image?"+ clientID + apiSecret + downloadURL;
          
          console.log("Here's the URL in the callFace function:", queryURL)
          // Performing AJAX GET request
          $.ajax({
              url: queryURL,
              method: "POST"
          })
          // After data comes back from the request
          .then(function(response) {
              // storing the data from the AJAX request in the results variable
              var result= response.token;
              console.log(result);
          });
        }


          function displaySwap(){
            var sadnessText = "You're Sad. You could use a hug...and a drink";
            var sadButton= "sad-button";
            var happinessText= "You're happy! Great, let's celebrate!";
            var happyButton = "happy-button";
            var angerText= "You're angry. It's OK, let's calm you down";
            var angerButton= "angry-button";
            var fearText= "You're afraid! How about some liquid courage?";
            var fearButton = "fear-button"
            var disgustText= "You're disgusted. You cannot even with this day.";
            var disgustButton="disgust-button";
            var surprisedText= "You're surprised! Didn't see that one comin', huh?";
            var surprisedButton= "surprised-button";
            var neutralText = "Damn! Do you play poker? We can't tell what you're feeling. How about a rando drink?";
            var neutralButton = "neutral-button";


            if(emoResults==='happiness'){
              $("#new-text").text(happinessText);
              $("#drink-button").attr("id", happyButton);
            }
            else if(emoResults=='sadness'){
              $("#new-text").text(sadnessText);
              $("#drink-button").attr("id", sadButton);

            }

            else if(emoResults==='angry'){
              $("#new-text").text(angerText);
              $("#drink-button").attr("id", angerButton);
            }

           else if(emoResults==="fear"){
              $("#new-text").text(fearText);
              $("#drink-button").attr("id", fearButton);
            }

           else if(emoResults=== "digsust"){
            $("#new-text").text(disgustText);
            $("#drink-button").attr("id", disgustButton);
           }
           else if(emoResults=="surprised"){
            $("#new-text").text(surprisedText);
            $("#drink-button").attr("id", surprisedButton);
           }
           else if (emoResults==="neutral"){
            $("#new-text").text(neutralText);
            $("#drink-button").attr("id", neutralButton);
           }



          }
        });
 
 
 
 
 
 
 
 
 
 
 
