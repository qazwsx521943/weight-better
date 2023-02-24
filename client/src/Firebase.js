// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import AuthService from "./pages/services/auth.service";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2wP2ijiaFXLAn2OysgFTqTW1l1scu1os",
    authDomain: "weight-better.firebaseapp.com",
    projectId: "weight-better",
    storageBucket: "weight-better.appspot.com",
    messagingSenderId: "1045188870603",
    appId: "1:1045188870603:web:dc8b57d072e39b3444764e",
    measurementId: "G-ZN8J3QWKSF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const fullname = result.user.displayName;
            const email = result.user.email;
            const profile_image = result.user.photoURL;
            const username = result.user.email.split("@")[0];
            const password = result.user.email.split("@")[0];
            const birth_date = "2022-09-28";
            return AuthService.googleLogin({ fullname, email, profile_image, username, password, birth_date });
        })
        .then((res) => localStorage.setItem("user", res.data))
        .catch((err) => {
            console.log(err);
        });
};
