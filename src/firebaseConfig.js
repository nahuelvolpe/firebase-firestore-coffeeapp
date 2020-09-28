var firebaseConfig = {
    apiKey: "AIzaSyAH6ZlY-A6kHgPt3POOeb9FijsmecV-iA8",
    authDomain: "firestore-coffeeapp.firebaseapp.com",
    databaseURL: "https://firestore-coffeeapp.firebaseio.com",
    projectId: "firestore-coffeeapp",
    storageBucket: "firestore-coffeeapp.appspot.com",
    messagingSenderId: "862375259859",
    appId: "1:862375259859:web:813c18b559dcfa40edee26"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();