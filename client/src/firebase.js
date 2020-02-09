import * as firebase from 'firebase/app';
import 'firebase/database';

const config = {
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  apiKey: process.env.REACT_APP_API_KEY,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.database();