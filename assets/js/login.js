import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// Firebase configuration (replace with your actual project details)
const firebaseConfig = {
    apiKey: "AIzaSyAGB1XOmYYFfMkayysJCWwRaHJHigZd-TQ",
    authDomain: "proyectocerti-34de9.firebaseapp.com",
    projectId: "proyectocerti-34de9",
    storageBucket: "proyectocerti-34de9.appspot.com",
    messagingSenderId: "278290537605",
    appId: "1:278290537605:web:f0820e5358f37827929dec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Inicializa Cloud Firestore y obtén una referencia al servicio.
export const db = getFirestore(app);
const auth = getAuth(app);
export { auth };

/**
 * Inicio de sesion
 */

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

var contador = 0;

// Manejar el login
//INICIO CON CORREO Y CONTRASEÑA
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    contador = contador + 1;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Usuario logueado exitosamente
            // Una vez que se autentica el email y pass, se redirecciona al home
            window.location.href = 'home.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            if (errorCode === "auth/invalid-login-credentials") {
                alert('Email o Contraseña no son correctos.');
            }
            if (contador == 2) {
                alert('Puede que haya creado su cuenta vinculándola con Google. De no ser así, puede resetear su contraseña.');
            }
            // aqui se limpian los input
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            email.value = "";
            password.value = '';
        });
});

