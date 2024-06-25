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

const user = auth.currentUser;
    if (user) {
            try {
                await setDoc(doc(db, "users", user.uid), {
                        elapsedTime: elapsedTime
                            }, { merge: true });
                            console.log("Elapsed time successfully written!");
                        } catch (error) {
                            console.error("Error writing document: ", error);
                        }
                    }


                 document.addEventListener("DOMContentLoaded", function () {
                        const container = document.getElementById('pixel-art-container2');
                        const button1 = document.querySelector('.button1');
                        const button2 = document.querySelector('.button2');
                        const button3 = document.querySelector('.button3');
                        const scores = document.getElementById('score-container');
                        const hinting = document.getElementById('hintBox');
                        let hintIndex = 0;
                        const hints = [
                        "Hint 1: Would you really need a hint for this?",
                        "Hint 2: Really? You need 2 hints for this?",
                        "Hint 3: Come on, it's literally right there."];

                        let startTime = Date.now();

                    
                        function updateButtonPositions() {
                            const containerRect = container.getBoundingClientRect();
                            
                            button1.style.left = `${containerRect.left + -60}px`;
                            button1.style.top = `${containerRect.top + 310}px`; //Reset
            
                            button2.style.left = `${containerRect.left + 20}px`;
                            button2.style.top = `${containerRect.top + 310}px`; //Undo
            
                            button3.style.left = `${containerRect.left + 760}px`;
                            button3.style.top = `${containerRect.top + 310}px`; // Hint
            
                            scores.style.left = `${containerRect.left + 740}px`;
                            scores.style.top = `${containerRect.top + -255}px`; // Score Board
            
                            hinting.style.left = `${containerRect.left + 710}px`;
                            hinting.style.top = `${containerRect.top + 340}px`; // Hints na talaguh
                        }
            
                        updateButtonPositions();
                        window.addEventListener('resize', updateButtonPositions);
                        window.addEventListener('scroll', updateButtonPositions);
            
            let currentFrameIndex = 0;
            let interval = 1000;
            const frames2 = container.querySelectorAll(".pixel-art-frame");
            let animationInterval;
        
            function showNextFrame(frames) {
                frames[currentFrameIndex].classList.remove("active");
                currentFrameIndex = (currentFrameIndex + 1) % frames.length;
                frames[currentFrameIndex].classList.add("active");
        
                // Last Frame
                if (frames[currentFrameIndex].id === 'img19') {
                    clearInterval(animationInterval);
                }
            }
        
            function startAnimation(frames) {
                currentFrameIndex = 0; // Reset index
                frames[currentFrameIndex].classList.add("active");
                animationInterval = setInterval(() => showNextFrame(frames), interval);
            }
        
            setTimeout(() => {
                startAnimation(frames2); 
            }, 3000);
        
            setTimeout(() => {
                        document.getElementById("sentence7").style.display = "block";
                        document.getElementById("sentence7").classList.add("show");
                      }, 4000); 
        
            setTimeout(() => {
                      document.getElementById("sentence8").style.display = "block";
                      document.getElementById("sentence8").classList.add("show");
                      }, 8000); 
        
        
        const scoreElement = document.getElementById('score');
        function getScore() {
          const score = localStorage.getItem("score");
          return score ? parseInt(score, 10) : 0;
        };
        
        function updateScore(newScore) {
          localStorage.setItem("score", newScore);
          scoreElement.textContent = newScore;
        };
        
        let score = getScore();
        scoreElement.textContent = score;
        
        let newScore = getScore();
        
        window.checkAnswer8 = function() {
          var userInput = document.getElementById("textbox").value.trim().toLowerCase();
          var sentence8 = document.getElementById("sentence8");
          var correctAnswer = "56";
          var spanClass = userInput === correctAnswer ? 'correct' : 'incorrect';
        
                if (userInput === correctAnswer) {
                    const endTime = Date.now();
                    const elapsedTime = (endTime - startTime) / 1000;
                    console.log(`Time taken: ${elapsedTime} seconds`);
                    newScore = score + 11; 
                    updateScore(newScore);
                    sentence8.innerHTML = "Complete the code to verify the number you currently see in your screen. " +
                        "<br><br>public class Chest{<br>int number = <span class='" + spanClass + "'>" + userInput + "</span> ;<br>int ChestNumber;<br><br>";
                        document.getElementById("textbox").disabled = true;
                        document.getElementById("submitbutton").disabled = true;
                        
                    setTimeout(() => {
                        document.getElementById("sentence9").style.display = "block";
                        document.getElementById("sentence9").classList.add("show");
                    }, 2000);
        
                    setTimeout(() => {
                        window.location.href = 'https://guillianecantillas.github.io/CodeCraft/IngameHorror3.html';
                    }, 8000);
        
                } else {
                    sentence8.innerHTML = "Complete the code to verify the number you currently see in your screen. " +
                        "<br><br>public class Chest{<br>int number = <span class='" + spanClass + "'>" + userInput + "</span> ;<br>int ChestNumber;<br><br>";
                };
            };
        
            console.log("Current Score:", score);
            console.log("New Score:", newScore);  
        
            window.updateSentence8 = function () {
                var userInput = document.getElementById("textbox").value.trim();
                var sentence8 = document.getElementById("sentence8");
                sentence8.innerHTML = "Complete the code to verify the number you currently see in your screen. "
                    + "<br><br>public class Chest{<br>int number =" + userInput + ";<br>int ChestNumber;<br><br>";
            };
                    window.resetForm = function () {
                        document.getElementById("answerForm").reset();
                        sentence8.innerHTML = "Complete the code to verify the number you currently see in your screen. "
                    + "<br><br>public class Chest{<br>int number = _________;<br>int ChestNumber;<br><br>";                
                    document.getElementById("textbox").disabled = false;
                    document.getElementById("sentence9").style.display = "none";
                    document.getElementById("sentence9").classList.remove("show");
                    };
        
                    window.undoInput = function () {
                        var textbox = document.getElementById("textbox");
                        textbox.value = textbox.value.slice(0, -1);
                        updateSentence8();
                    };
        
                window.showHint = function () {
                    const hintBox = document.getElementById("hintBox");
                    const hintText = document.getElementById("hintText");
        
                    if (hintIndex < hints.length) {
                        hintText.textContent = hints[hintIndex];
                        hintBox.style.display = "block";
                        hintIndex++;
                    } else {
                        hintText.textContent = "No more hints available.";
                    }};
                });