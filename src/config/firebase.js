import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: 'AIzaSyCUuBqDbkcQINQoAVATlU4o0FlWtwVjvI0',
  authDomain: 'connector-f0761.firebaseapp.com',
  databaseURL: 'https://connector-f0761.firebaseio.com',
  projectId: 'connector-f0761',
  storageBucket: 'connector-f0761.appspot.com',
  messagingSenderId: '845390195879',
  appId: '1:845390195879:web:420981b82e694607347f82',
  measurementId: 'G-GLLENSS5NG',
};

const fire = firebase.initializeApp(firebaseConfig);
fire.analytics();
export default fire;