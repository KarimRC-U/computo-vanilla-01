  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBtOoDAY6cETijen2lABpDlrRgKCMsrfWc",
    authDomain: "krc-dicis-ej2025.firebaseapp.com",
    projectId: "krc-dicis-ej2025",
    storageBucket: "krc-dicis-ej2025.firebasestorage.app",
    messagingSenderId: "547810171579",
    appId: "1:547810171579:web:f86811f55b05e7965b679e",
    measurementId: "G-91P062MYT6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export const db = getFirestore(app)
 export const storage = getStorage(app)