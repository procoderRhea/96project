//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDgyCkyknKbCpEROqPNqbeE7PvhWzgrrjs",
    authDomain: "kwitter-studentactivity.firebaseapp.com",
    databaseURL: "https://kwitter-studentactivity-default-rtdb.firebaseio.com",
    projectId: "kwitter-studentactivity",
    storageBucket: "kwitter-studentactivity.appspot.com",
    messagingSenderId: "420512122362",
    appId: "1:420512122362:web:cd83aab9d846dd11795043"
  };
  
  // Initialize Firebase
firbase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
    rome_name = localStorage.getItem("room_name");

    function send() {

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();



function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_login.html";
 }
