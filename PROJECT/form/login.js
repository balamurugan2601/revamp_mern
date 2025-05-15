var form = document.getElementById("form");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var emailerror = document.getElementById("emailerror");
var passerror = document.getElementById("passerror");
var submit = document.getElementById("submit");

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

function savedata(email, pass) {
  firebase.initializeApp(firebaseConfig);

  const db = firebase.database().ref("users");

  db.push({
    email: email,
    password: pass,
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = aValidation(email.value, pass.value);
  savedata(email.value, pass.value);
});

email.addEventListener("input", (e) => {
  const emailregex = /^\S+@\S+\.\S+$/;
  if (e.target.value == "") {
    emailerror.textContent = "Email is required";
  } else if (!e.target.value.match(emailregex)) {
    emailerror.textContent = "Email format : Coding@gmail.com";
  } else {
    emailerror.textContent = "";
  }
});

pass.addEventListener("input", (e) => {
  const passregex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (e.target.value == "") {
    passerror.textContent = "Password is required";
  } else if (!e.target.value.match(passregex)) {
    passerror.textContent = "Password format : Coding@123";
  } else {
    passerror.textContent = "";
  }
});

function aValidation(email, pass) {
  const emailregex = /^\S+@\S+\.\S+$/;
  const passregex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  let isValid = true;

  if (email.match(emailregex)) {
    console.log("Valid email");
  } else {
    console.log("Invalid emmail");
  }

  if (pass.match(passregex)) {
    console.log("Valid password");
  } else {
    console.log("Invalid password");
  }

  if (isValid) {
    console.log("Data sent to DB");
  }

  setTimeout(() => {
    form.reset();
  }, 2000);

  return isValid;
}
