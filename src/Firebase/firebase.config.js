import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpkN0x5SeQXctS1IKakpcCGf-GoumXvF8",
  authDomain: "task-management-aba5f.firebaseapp.com",
  projectId: "task-management-aba5f",
  storageBucket: "task-management-aba5f.appspot.com",
  messagingSenderId: "222501965198",
  appId: "1:222501965198:web:be52ca378cdadeb513e8df",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
