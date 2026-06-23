// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
GoogleAuthProvider,
signInWithPopup,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore,
collection,
doc,
addDoc,
setDoc,
getDoc,
getDocs,
updateDoc,
deleteDoc,
query,
where,
orderBy,
onSnapshot,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
getStorage,
ref,
uploadBytes,
getDownloadURL,
deleteObject
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
apiKey: "AIzaSyAkuoUAAr7zEQICxlnimpz1XUFKJA3hPA8",
authDomain: "best-f6d59.firebaseapp.com",
projectId: "best-f6d59",
storageBucket: "best-f6d59.firebasestorage.app",
messagingSenderId: "422817936552",
appId: "1:422817936552:web:6d8bfeb0efab2e6302fe9d",
measurementId: "G-QVZZK9T59X"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();

export {
app,

auth,
db,
storage,
provider,

GoogleAuthProvider,
signInWithPopup,
signOut,
onAuthStateChanged,

collection,
doc,
addDoc,
setDoc,
getDoc,
getDocs,
updateDoc,
deleteDoc,
query,
where,
orderBy,
onSnapshot,
serverTimestamp,

ref,
uploadBytes,
getDownloadURL,
deleteObject
};
