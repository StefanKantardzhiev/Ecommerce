
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDHrYaXzhi9RNnRo0TmrpAAGcQ0f658mY0",
    authDomain: "pcbuildz-v2.firebaseapp.com",
    projectId: "pcbuildz-v2",
    storageBucket: "pcbuildz-v2.appspot.com",
    messagingSenderId: "253221785006",
    appId: "1:253221785006:web:a151932a68f1b77c988c3f",
    measurementId: "G-NVL1J7CBV2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)



export default app;