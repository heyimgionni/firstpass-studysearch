import { auth } from "./firebase"; // Adjust the path if necessary
// we import googleAuthProvider , signWithPopup , signOut from the dependecies
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Function to handle Google sign-in
export const googleSignIn = async () => {
  // we create the provider
  const provider = new GoogleAuthProvider();
  try {
    // try with signInWithPopup
    const result = await signInWithPopup(auth, provider);
    console.log("User signed in:", result.user);
  } catch (error) {
    // in case of error
    console.error("Error signing in with Google:", error);
  }
};

// Function to handle sign-out
export const signOutUser = async () => {
  try {
    // sign out
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
