
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCS50Fsm2hCMgVohFgCK9j6shIopt1eCic",
  authDomain: "chat-yard-app.firebaseapp.com",
  projectId: "chat-yard-app",
  storageBucket: "chat-yard-app.appspot.com",
  messagingSenderId: "844768710572",
  appId: "1:844768710572:web:b8bec2c2e080c8c6ecb409"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    app, db
}
