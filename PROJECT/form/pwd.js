var form = document.getElementById("form");
var newpass = document.getElementById("newpass");
var conpass = document.getElementById("conpass");
var error = document.getElementById("error");
var error1 = document.getElementById("error1");
var submit = document.getElementById("submit");

const uid = "userID1";


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

function updatedata(haspwd) {
  firebase.initializeApp(firebaseConfig);

  const db = firebase
    .database()
    .ref("users/" + uid)
    .set({
      password: haspwd,
    })
      setTimeout(() => {
        form.reset();
      }, 2000);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = validation(newpass.value, conpass.value);
  if (isValid) {
    const hashpwd = btoa(newpass.value);
    updatedata(hashpwd);
    console.log("Password updated successfully");
  }
});

newpass.addEventListener("input", (e) => {
  const regex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (e.target.value == "") {
    error.textContent = "Required*";
  } else if (!e.target.value.match(regex)) {
    error.textContent = "Format : Coding@123";
  } else {
    error.textContent = "";
  }
});

conpass.addEventListener("input", (e) => {
  if (e.target.value == "") {
    error1.textContent = "Required*";
  } else if (e.target.value != newpass.value) {
    error1.textContent = "Password not matched";
  } else {
    error1.textContent = "";
  }
});

function validation(newpass, oldpass) {
  const isValid = true;
  if ((newpass == "") & (oldpass == "")) {
    error.textContent = "Required*";
    error1.textContent = "Required*";
    isValid = false;
  } else if (newpass == "") {
    error.textContent = "Required*";
    isValid = false;
  } else if (oldpass == "") {
    error1.textContent = "Required*";
    isValid = false;
  } else {
    error.textContent = "";
    error1.textContent = "";
  }

  if (newpass != oldpass) {
    isValid = false;
    
  }

  return isValid;
}
