// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwLEgGa9xk5BqqSpexUO_ikAQpU65IsVc",
  authDomain: "project94-2ef56.firebaseapp.com",
  databaseURL: "https://project94-2ef56-default-rtdb.firebaseio.com",
  projectId: "project94-2ef56",
  storageBucket: "project94-2ef56.appspot.com",
  messagingSenderId: "408684629177",
  appId: "1:408684629177:web:43e30e992cc26a4dfadf68"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose :"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "Kwitter_room.html";
    }
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - "+ Room_names);
row= "<div class = 'room_name' id="+Room_names+"onclick='Redirect(this.id)'>#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
//End code
});});}
getData();
function Redirect(name){
console.log(name);
localStorage.setItem("name",name)
window.location= "Kwitter_page.html"
}