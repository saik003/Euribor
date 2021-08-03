
import firebase from 'firebase/app';
import 'firebase/firestore';

// firebase init
const firebaseConfig = {
    projectId: "euribor-d6ffe",
  };

// Initialize Firebase 
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore()
 export {
   db
 }