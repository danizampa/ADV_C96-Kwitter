// ADICIONE SUS LINKS FIREBASE AQUI
const firebaseConfig = {
    apiKey: "AIzaSyDFLPLYHvMfwoYi6Da9-645NjkXdtt0LO4",
    authDomain: "chatc93-f0f0d.firebaseapp.com",
    databaseURL: "https://chatc93-f0f0d-default-rtdb.firebaseio.com",
    projectId: "chatc93-f0f0d",
    storageBucket: "chatc93-f0f0d.appspot.com",
    messagingSenderId: "117361453329",
    appId: "1:117361453329:web:51ca7fb83d4cd946ce44b0",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  getData();

  const nomeUsuario = localStorage.getItem("nomeUsuario");
  const nomeSala = localStorage.getItem("nomeSala");
  
  function getData() {
    firebase
      .database()
      .ref("/")
      .on("value", snapshot => {
        console.log("Keys Changed");
        snapshot.forEach(function (childSnapshot) {
          const childKey = childSnapshot.key;
          
        });
      });
  }

function send() {
    const msg = document.getElementById("msg").value;
    firebase.database().ref(nomeSala).push({
        name: userName,
        message: msg,
        like: 0
    });
    
    document.getElementById("msg").value = "";
}