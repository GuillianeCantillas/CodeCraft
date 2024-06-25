import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
const auth = getAuth();
const db = getFirestore(app);

// Authentication changes daw
onAuthStateChanged(auth, async (user) => {
  if (user) {
    // Dapat signed in si user
    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();

        // Display user data sa HomePageUser
        document.getElementById("First_Name").textContent = userData.First_Name;
        document.getElementById("Initial").textContent = userData.Initial;
        document.getElementById("Last_Name").textContent = userData.Last_Name;
        document.getElementById("StudentNumber").textContent = userData.StudentNumber;
        document.getElementById("Email").textContent = userData.Email;
        document.getElementById("YearLevel").textContent = userData.YearLevel;
        document.getElementById("Course").textContent = userData.Course;
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  } else {
    // Pag walang User na sssigned in
    console.log("No user logged in.");
  }
});

document.getElementById('logoutBtn').addEventListener('click', function() {
  alert("You have been logged out.");
  window.location.href = 'https://guillianecantillas.github.io/CodeCraft/index.html'; 
});
  
