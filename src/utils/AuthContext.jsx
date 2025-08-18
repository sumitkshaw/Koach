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
      navigate("/dashboard");
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

// // AuthContext.jsx - TEMPORARY VERSION (No Firebase needed)
// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Simulate loading time and check for existing "logged in" user
//   useEffect(() => {
//     // Simulate Firebase initialization delay
//     const timer = setTimeout(() => {
//       // Check if user was "logged in" before (stored in localStorage)
//       const savedUser = localStorage.getItem('tempUser');
//       if (savedUser) {
//         setUser(JSON.parse(savedUser));
//       }
//       setLoading(false);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, []);

//   const loginWithGoogle = async (navigate) => {
//     try {
//       // Simulate Google login with fake user data
//       const fakeGoogleUser = {
//         uid: 'fake-google-uid-123',
//         email: 'testuser@gmail.com',
//         displayName: 'Test User',
//         photoURL: 'https://via.placeholder.com/150',
//         provider: 'google'
//       };
      
//       // Store fake user
//       setUser(fakeGoogleUser);
//       localStorage.setItem('tempUser', JSON.stringify(fakeGoogleUser));
      
//       // Simulate slight delay like real Firebase
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       navigate("/dashboard");
//       console.log("✅ Fake Google login successful");
//     } catch (error) {
//       console.error("Google sign-in error", error);
//     }
//   };

//   const signup = async (name, email, password, navigate, setError) => {
//     try {
//       // Simulate email/password signup
//       const fakeEmailUser = {
//         uid: 'fake-email-uid-456',
//         email: email,
//         displayName: name,
//         photoURL: null,
//         provider: 'email'
//       };

//       // Store fake user
//       setUser(fakeEmailUser);
//       localStorage.setItem('tempUser', JSON.stringify(fakeEmailUser));
      
//       // Simulate slight delay like real Firebase
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       navigate("/bio");
//       console.log("✅ Fake email signup successful");
//     } catch (error) {
//       console.error("Sign-up error", error);
//       setError("Sign-up failed");
//     }
//   };

//   const logout = async (navigate) => {
//     try {
//       // Clear fake user data
//       setUser(null);
//       localStorage.removeItem('tempUser');
      
//       // Simulate slight delay like real Firebase
//       await new Promise(resolve => setTimeout(resolve, 500));
      
//       navigate("/");
//       console.log("✅ Fake logout successful");
//     } catch (error) {
//       console.error("Logout error", error);
//     }
//   };

//   // Debug info - remove this in production
//   useEffect(() => {
//     console.log("🔥 TEMP AUTH: User state changed:", user ? `Logged in as ${user.email}` : 'Not logged in');
//   }, [user]);

//   return (
//     <AuthContext.Provider
//       value={{ 
//         user, 
//         isAuthenticated: !!user, 
//         loginWithGoogle, 
//         signup, 
//         logout 
//       }}
//     >
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
// export default AuthContext;