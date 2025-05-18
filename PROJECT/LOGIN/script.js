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

var sign_up = document.getElementById("sign_up");
var sign_in = document.getElementById("sign_in");
var sign_in_a = document.getElementById("sign_in_a");
var sign_up_a = document.getElementById("sign_up_a");
var email = document.getElementById("email");
var password = document.getElementById("password");
var lemail = document.getElementById("lemail");
var lpassword = document.getElementById("lpassword");
var emailerror = document.getElementById("emailerror");
var passerror = document.getElementById("passerror");
var signup = document.getElementById("signup");

const emailregex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const passwordregex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

sign_in_a.addEventListener("click", function () {
  sign_in.classList.remove("hidden");
  sign_up.classList.add("hidden");
});
sign_up_a.addEventListener("click", function () {
  sign_up.classList.remove("hidden");
  sign_in.classList.add("hidden");
});

email.addEventListener("input", (e) => {
  if (e.target.value == "") {
    emailerror.textContent = "Email is required";
  } else if (!e.target.value.match(emailregex)) {
    emailerror.textContent = "Email format : coding1234@gmail.com";
  } else {
    emailerror.textContent = "";
  }
});

password.addEventListener("input", (e) => {
  if (e.target.value == "") {
    passerror.textContent = "Password is required";
  } else if (!e.target.value.match(passwordregex)) {
    passerror.textContent = "Password format : Coding@1234";
  } else {
    passerror.textContent = "";
  }
});

signup.addEventListener("click", () => {
  console.dir(signup);
});
