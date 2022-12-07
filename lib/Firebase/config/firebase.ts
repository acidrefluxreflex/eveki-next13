
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions'

const firebaseConfig = {
    apiKey: "AIzaSyA5V464iLv4yopbTXOZSJ7fCldCQUlLzQE",
    authDomain: "chat-ai-5778d.firebaseapp.com",
    projectId: "chat-ai-5778d",
    storageBucket: "chat-ai-5778d.appspot.com",
    messagingSenderId: "449303245488",
    appId: "1:449303245488:web:078a2256e2b9a79f554175",
    measurementId: "G-199SSTDT8F"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const user = auth.currentUser;
export const analytics = getAnalytics();
export const db = getFirestore();
export const storage = getStorage();


