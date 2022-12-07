import firebase from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"



export const Login = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(function (result: any) {
        return result;
      })
      .catch(function (error) {
        console.log(error);
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

