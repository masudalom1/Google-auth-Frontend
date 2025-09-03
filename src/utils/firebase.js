import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCCeqgVoP3GGV4JociZpcDW4VtUdHW4qaY",
  authDomain: "auth-4779b.firebaseapp.com",
  projectId: "auth-4779b",
  storageBucket: "auth-4779b.firebasestorage.app",
  messagingSenderId: "1041273536202",
  appId: "1:1041273536202:web:93bced3b9b73a1d1a6be33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};