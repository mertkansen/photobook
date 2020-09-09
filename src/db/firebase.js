import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCMRm6NwfWteZ543Vy1BvIIzjooc46bMA",
  authDomain: "photobook-ms.firebaseapp.com",
  databaseURL: "https://photobook-ms.firebaseio.com",
  projectId: "photobook-ms",
  storageBucket: "photobook-ms.appspot.com",
  messagingSenderId: "185491046819",
  appId: "1:185491046819:web:ae9cd3a9d81322d0fd1a16",
  measurementId: "G-Q7TED3EN44",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, storage, timestamp };
