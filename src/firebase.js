import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBvMWzjySLtBZcYkyxjNpxwMaXQar0uPo0",
    authDomain: "facebook-clone-c73e0.firebaseapp.com",
    databaseURL: "https://facebook-clone-c73e0.firebaseio.com",
    projectId: "facebook-clone-c73e0",
    storageBucket: "facebook-clone-c73e0.appspot.com",
    messagingSenderId: "1080604117469",
    appId: "1:1080604117469:web:c5c4e6f8cae97285e84e34",
    measurementId: "G-YL7B0KT39W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth, provider};
  export default db;