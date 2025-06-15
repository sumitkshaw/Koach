import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBX8eflwtZgBlBtJj2V90HrZFlKfL4rNA0",
  authDomain: "koach-f14fc.firebaseapp.com",
  projectId: "koach-f14fc",
  storageBucket: "koach-f14fc.firebasestorage.app",
  messagingSenderId: "753349661428",
  appId: "1:753349661428:web:9ccfdb579c801951f104a1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };