// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDHrYaXzhi9RNnRo0TmrpAAGcQ0f658mY0",
    authDomain: "pcbuildz-v2.firebaseapp.com",
    projectId: "pcbuildz-v2",
    storageBucket: "pcbuildz-v2.appspot.com",
    messagingSenderId: "253221785006",
    appId: "1:253221785006:web:c4a1db4163fc243e988c3f",
    measurementId: "G-1VJ1D6R7HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)


export default app;