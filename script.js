// Firebase Configuration (Paste your config from Firebase Console)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtYFjOBAuDQkcrwKRKP4FzbSb5N5pudYk",
  authDomain: "v-tok-d78ad.firebaseapp.com",
  projectId: "v-tok-d78ad",
  storageBucket: "v-tok-d78ad.firebasestorage.app",
  messagingSenderId: "448669303511",
  appId: "1:448669303511:web:7af9fec0b6e0f981eaa692",
  measurementId: "G-ZJ2L4E58T1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login Logic
function loginEmail() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.signInWithEmailAndPassword(email, password).catch(err => alert(err.message));
}

function loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
}

function logout() {
    auth.signOut();
}

// Auth State Listener (Automatic Switch)
auth.onAuthStateChanged(user => {
    if (user) {
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('main-app').style.display = 'block';
        document.getElementById('user-email').innerText = "Email: " + user.email;
    } else {
        document.getElementById('auth-section').style.display = 'block';
        document.getElementById('main-app').style.display = 'none';
    }
});

// Tab Switching Logic
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}
