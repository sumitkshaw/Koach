// AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { auth, provider } from "../firebase";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async (navigate) => {
    try {
      const result = await signInWithPopup(auth, provider);
      navigate("/welcome");
    } catch (error) {
      console.error("Google sign-in error", error);
    }
  };

  const signup = async (name, email, password, navigate, setError) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      navigate("/bio");
    } catch (error) {
      console.error("Sign-up error", error);
      setError("Sign-up failed");
    }
  };

  const logout = async (navigate) => {
    try {
      await signOut(auth);
      setUser(null); // Clear the user immediately for local state
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, loginWithGoogle, signup, logout }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
