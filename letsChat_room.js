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
  function addRoom()
  {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "letsChat_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
    });});}
       getData();
       function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "letsChat_page.html";
}