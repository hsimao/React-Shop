import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBerkvn7hd6x62oiflNJ1EL_wiwUvFxU9Y',
  authDomain: 'react-shop-14b02.firebaseapp.com',
  databaseURL: 'https://react-shop-14b02.firebaseio.com',
  projectId: 'react-shop-14b02',
  storageBucket: 'react-shop-14b02.appspot.com',
  messagingSenderId: '866915694031',
  appId: '1:866915694031:web:32264d50e64a3610158eba',
  measurementId: 'G-78DMYZ3G1P',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
