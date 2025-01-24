  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

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
  const analytics = getAnalytics(app);
