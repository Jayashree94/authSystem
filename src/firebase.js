import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage"
import "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACGFl3w4UKvQTcAqKSVIHol5bSqVX4alo",
  authDomain: "auth-system-test1.firebaseapp.com",
  projectId: "auth-system-test1",
  storageBucket: "auth-system-test1.firebasestorage.app",
  messagingSenderId: "842769589845",
  appId: "1:842769589845:web:14f5ea39cc9361edf496dc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export {auth, googleProvider,fbProvider,githubProvider};