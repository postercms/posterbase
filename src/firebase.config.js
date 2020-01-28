import firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyBDTIo1CJf3jlwsgh_VHvgABoBPNZmIAMU',
  authDomain: 'posterbase-test.firebaseapp.com',
  databaseURL: 'https://posterbase-test.firebaseio.com',
  projectId: 'posterbase-test',
  storageBucket: 'posterbase-test.appspot.com',
  messagingSenderId: '825441833417',
  appId: '1:825441833417:web:e199de76b332b1143d9818',
  measurementId: 'G-00FTEF5P28',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
