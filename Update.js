import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";;

const firebaseConfig = {
    apiKey: "AIzaSyDBxsbsyx5cs63zi3TY3mrOVBX1hFKpxUg",
    authDomain: "codecraft-25727.firebaseapp.com",
    projectId: "codecraft-25727",
    storageBucket: "codecraft-25727.appspot.com",
    messagingSenderId: "802309648770",
    appId: "1:802309648770:web:d02bbc354261ff3174df9b",
    measurementId: "G-M2NDHT3KQE"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const user = getAuth().currentUser; 

if (user) {
  const docRef = db.collection("users").doc(user.uid);

  docRef.get().then((doc) => {
    if (doc.exists) {
      const userData = doc.data();

      document.getElementById("First_Name").textContent = userData.FirstName;
      document.getElementById("Initial").textContent = userData.Middle;
      document.getElementById("Last_Name").textContent = userData.Lastname;
      document.getElementById("StudentNumber").textContent = userData.StudentNumber;
      document.getElementById("Email").textContent = userData.Email;
      document.getElementById("YearLevel").textContent = userData.YearLevel;
      document.getElementById("Course").textContent = userData.Course;
    } else {
      console.log("No such document!");
    }
  }).catch((error) => {
    console.error("Error fetching document:", error);
  });
} else {
  console.log("No user logged in.");
}

