var firebaseConfig = {
    apiKey: "AIzaSyDWL25ZDcZIOKff_a1F7wdri5DuhZ5sS7A",
    authDomain: "letschat-final.firebaseapp.com",
    databaseURL: "https://letschat-final-default-rtdb.firebaseio.com",
    projectId: "letschat-final",
    storageBucket: "letschat-final.appspot.com",
    messagingSenderId: "1050451637926",
    appId: "1:1050451637926:web:4bd74a6b352fdd4f34a667",
    measurementId: "G-85KN2E7LW9"
  };
  firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childKey;
message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name +"<img class='user_heart' src='heart.png' ></h4>";
message_with_tag= "<h4 class='message_h4'>" + message +"</h4>";
like_button = "<button class='btn btn-danger'" + firebase_message_id + "value=" +like+"onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-heart'>"+like+"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML +=row;
} });  }); }
getData();
function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            heart:0
      });
      document.getElementById("msg").value = "";
}