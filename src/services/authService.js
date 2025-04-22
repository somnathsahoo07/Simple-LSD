
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
  return signOut(auth);
};
