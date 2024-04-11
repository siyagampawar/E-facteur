// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,FacebookAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCivqclSQgClpM5HdNwkBNxF_JGym_WvVs",
  authDomain: "newef-2bcd7.firebaseapp.com",
  databaseURL:"https://newef-2bcd7-default-rtdb.firebaseio.com",
  projectId: "newef-2bcd7",
  storageBucket: "newef-2bcd7.appspot.com",
  messagingSenderId: "590108829526",
  appId: "1:590108829526:web:f4e605f9d36e35935698f7",
  measurementId: "G-M0510PSN0G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const provider1 =new FacebookAuthProvider();
// const provider2 = new MicrosoftAuthProvider();
export {auth,provider,provider1};

export default app;

