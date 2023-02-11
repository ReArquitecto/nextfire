import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyChqaD5Xxdill7TaBx9_XwqFNwEkL72oX0",
    authDomain: "nextfire-ultra.firebaseapp.com",
    projectId: "nextfire-ultra",
    storageBucket: "nextfire-ultra.appspot.com",
    messagingSenderId: "860620638200",
    appId: "1:860620638200:web:15feb5dcfbb8943e5f380d"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();