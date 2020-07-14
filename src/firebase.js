import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  appId: process.env.FIREBASE_APP_ID,
  projectId: process.env.FIREBASE_PROJECT_ID,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
};

// Initialize or provide existing app
export default firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(config);
