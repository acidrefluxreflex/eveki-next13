"use client";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    UserCredential,
    signOut,
  } from 'firebase/auth';
  import { auth } from './firebase';
  
  export const googleLogin = (): Promise<UserCredential> => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  export const mailLogin = (email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  export const logout = (): Promise<void> => {
    return signOut(auth);
  };

