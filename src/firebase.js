import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDV-o5G03JQL8hp6Bf8PVy65W1gWa6e07c',
  authDomain: 'livefitt-83433.firebaseapp.com',
  projectId: 'livefitt-83433',
  storageBucket: 'livefitt-83433.appspot.com',
  messagingSenderId: '603762808567',
  appId: '1:603762808567:web:53f52df7734730b8f6a5f2',
  measurementId: 'G-N6C40VHHKJ',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
