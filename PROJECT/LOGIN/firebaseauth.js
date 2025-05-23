import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCwO361fKrsk3HH221JLSn1Rj35gUcvjqo",
  authDomain: "shyam-2601.firebaseapp.com",
  databaseURL:
    "https://shyam-2601-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shyam-2601",
  storageBucket: "shyam-2601.firebasestorage.app",
  messagingSenderId: "817828070818",
  appId: "1:817828070818:web:a75ad3696f59eaa5069efb",
};

const app = initializeApp(firebaseConfig);

const signup_btn = document.getElementById("signup_btn");
signup_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;

  const form = document.getElementById("form");
  const auth = getAuth();
  const db = getFirestore();
  createUserWithEmailAndPassword(auth, email, password).then(
    (userCredentials) => {
      const user = userCredentials.user;
      const userData = {
        email: email,
        firstname: firstname,
        lastname: lastname,
      };
      alert("User Created");
      const docRef = doc(db, "/users", user.uid);
      setDoc(docRef, userData)
        .then(() => {
          window.location.href = "index.html";
          console.log("Document written with ID: ", user.uid);
          setTimeout(() => {
            form.reset();
          }, 2000);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  );
});

const signin_btn = document.getElementById("signin_btn");
signin_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const lemail = document.getElementById("lemail").value;
  const lpassword = document.getElementById("lpassword").value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, lemail, lpassword)
    .then((userCredentials) => {
      const user = userCredentials.user;
      alert("User Signed In");
      window.location.href = "homepage.html";
      console.log(user);
      localStorage.setItem("loggedInUser", user.uid);
      setTimeout(() => {
        form.reset();
      }, 2000);
    })
    .catch((error) => {
      alert(error.message);
    });
});
