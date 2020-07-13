import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyC7PRQWWXLBFu6UCexl1y3EomH3W-jHjKk',
  authDomain: 'papelitos-9c6ef.firebaseapp.com',
  databaseURL: 'https://papelitos-9c6ef.firebaseio.com',
  projectId: 'papelitos-9c6ef',
  storageBucket: 'papelitos-9c6ef.appspot.com',
  messagingSenderId: '509368876679',
  appId: '1:509368876679:web:8a3b5f2c3c8a033db80222',
  measurementId: 'G-S0N1NGPLSF',
};

// Initialize or provide existing app
export default firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(config);

