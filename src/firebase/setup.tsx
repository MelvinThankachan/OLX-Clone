// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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

provider.setCustomParameters({
  prompt: "select_account ",
});

// Initialize Firebase services
export const auth = getAuth();
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
