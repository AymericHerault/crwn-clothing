import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD2u0GEKmWFpOsTNtzDGwmi6ACI3iAQq2s",
    authDomain: "crwndb-383cb.firebaseapp.com",
    databaseURL: "https://crwndb-383cb.firebaseio.com",
    projectId: "crwndb-383cb",
    storageBucket: "crwndb-383cb.appspot.com",
    messagingSenderId: "140587554767",
    appId: "1:140587554767:web:b7e9f1b567b645526f24ba",
    measurementId: "G-DLMJC66QJY"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
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