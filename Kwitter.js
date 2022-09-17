// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoBmv3cGRzYnm0cF7r8jSKYLCx6xfNRh8",
  authDomain: "class93-55889.firebaseapp.com",
  databaseURL: "https://class93-55889-default-rtdb.firebaseio.com",
  projectId: "class93-55889",
  storageBucket: "class93-55889.appspot.com",
  messagingSenderId: "716460018109",
  appId: "1:716460018109:web:6cbee083c1bc46f9f96ad4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function AddUser(){
user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name",user_name);
window.location = "kwitter_room.html";
}