import { createContext, useEffect, useState } from "react";
import {
  auth,
  githubProvider,
  googleAuthProvider
} from "../config/firebase";
import {
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [authLoading, setAuthLoading] = useState(false);  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("Logged in:", currentUser);
      } else {
        setUser(null);
        console.log("Logged out");
      }
      setIsLoading(false);
    });
  
    return () => unsubscribe();
  }, []);

  const googleSignIn = async () => {
    setAuthLoading(true);
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } finally {
      setAuthLoading(false);
    }
  };

  const githubSignIn = async () => {
    setAuthLoading(true);
    try {
      await signInWithPopup(auth, githubProvider);
    } finally {
      setAuthLoading(false);
    }
  };

  const signUpWithEmail = async (email, password) => {
    setAuthLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } finally {
      setAuthLoading(false);
    }
  };

  const loginWithEmail = async (email, password) => {
    setAuthLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = async () => {
    setAuthLoading(true);
    try {
      await signOut(auth);
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        googleSignIn,
        githubSignIn,
        signUpWithEmail,
        loginWithEmail,
        logout,
        authLoading,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
