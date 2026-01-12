// firebase.js (GitHub Pages compatible)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2nnW0FVzxuwU0b9jQc4L1GKf8esvQxv0",
  authDomain: "investment-my2.firebaseapp.com",
  projectId: "investment-my2",
  storageBucket: "investment-my2.firebasestorage.app",
  messagingSenderId: "156464959208",
  appId: "1:156464959208:web:52bd31478f5bf51905835d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
