// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL5tqRai8k5F5ybTXSwgbKvya_iwqjfaQ",
  authDomain: "olx-clone-eca94.firebaseapp.com",
  projectId: "olx-clone-eca94",
  storageBucket: "olx-clone-eca94.appspot.com",
  messagingSenderId: "566732309129",
  appId: "1:566732309129:web:dcb7751956a97504fb3c58",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
  prompt: "select_account ",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
