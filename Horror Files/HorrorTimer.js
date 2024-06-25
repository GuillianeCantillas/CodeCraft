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
                        const container = document.getElementById('pixel-art-container1');
                        const button1 = document.querySelector('.button1');
                        const button2 = document.querySelector('.button2');
                        const button3 = document.querySelector('.button3');
                        const scoreElement = document.getElementById('score');
                        const scores = document.getElementById('score-container');
                        const hinting = document.getElementById('hintBox');
                        let score = 0;
                        let hintIndex = 0;
                        const hints = [
                        "Hint 1: The method you are looking for starts with an 'o'.",
                        "Hint 2: It's a common method used to initiate actions.",
                        "Hint 3: It's often used to start programs or processes."];
            
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
            
                        const frames = document.querySelectorAll(".pixel-art-frame");
                        let currentFrameIndex = 0;
                        const interval = 1000;
            
                        function showNextFrame() {
                            frames[currentFrameIndex].classList.remove("active");
                            currentFrameIndex = (currentFrameIndex + 1) % frames.length;
                            frames[currentFrameIndex].classList.add("active");
                        }
            
                        function startAnimation() {
                            setInterval(showNextFrame, interval);
                        }
            
                        startAnimation();
            
                        setTimeout(() => {
                                    document.getElementById("sentence2").style.display = "block";
                                    document.getElementById("sentence2").classList.add("show");
                                }, 5000);
            
                         setTimeout(() => {
                                    document.getElementById("sentence3").style.display = "block";
                                    document.getElementById("sentence3").classList.add("show");
                                }, 15000);
                                
                        setTimeout(() => {
                                    document.getElementById("sentence4").style.display = "block";
                                    document.getElementById("sentence4").classList.add("show");
                                }, 20000);       
            
                        window.checkAnswer4 = function () {
                            const userInput = document.getElementById("textbox").value.trim().toLowerCase();
                            const correctAnswer = "open";
                            const spanClass = userInput === correctAnswer ? 'correct' : 'incorrect';
                            const sentence = document.getElementById("sentence4");
            
                            if (userInput === correctAnswer) {
                                const endTime = Date.now();
                                const elapsedTime = (endTime - startTime) / 1000;
                                console.log(`Time taken: ${elapsedTime} seconds`);
                                sentence.innerHTML = `The door seems to be missing a small passcode, <br><br> passcode = new File ("C:\\dungeon\\LargeSteelDoortxt");<br><br>public void <span class='${spanClass}'>${userInput}</span> (passcode) throws IOException  <br><br>`;
                                document.getElementById("textbox").disabled = true;
                                document.getElementById("submitbutton").disabled = true;
            
                                showToast();
            
                                score += 11;
                                scoreElement.textContent = score;
                                localStorage.setItem("score", score); // localStorage
            
                                setTimeout(() => {
                                    document.getElementById("sentence5").style.display = "block";
                                    document.getElementById("sentence5").classList.add("show");
                                }, 1000);
            
                                 setTimeout(() => {
                                    window.location.href = "https://guillianecantillas.github.io/CodeCraft/IngameHorror2.html";
                                }, 9000);
                            } else {
                                sentence.innerHTML = `The door seems to be missing a small passcode, <br><br> passcode = new File ("C:\\dungeon\\LargeSteelDoortxt");<br><br>public void <span class='${spanClass}'>${userInput}</span> (passcode) throws IOException  <br><br>`;
                                
                                score - 2;
                                scoreElement.textContent = score;
                            }
                        };
            
                        window.updateSentence4 = function () {
                            const userInput = document.getElementById("textbox").value.trim();
                            const sentence = document.getElementById("sentence4");
                            sentence.innerHTML = `The door seems to be missing a small passcode, <br><br> passcode = new File ("C:\\dungeon\\LargeSteelDoortxt"); <br><br>public void ${userInput} (passcode) throws IOException  <br><br>`;
                        };
            
                        window.resetForm = function () {
                            document.getElementById("answerForm").reset();
                            document.getElementById("sentence4").innerHTML = `The door seems to be missing a small passcode, <br><br> passcode = new File ("C:\\dungeon\\LargeSteelDoortxt");<br><br>public void __________ (passcode) throws IOException  <br><br>`;
                            document.getElementById("textbox").disabled = false;
            
                            document.getElementById("sentence5").style.display = "none";
                            document.getElementById("sentence6").style.display = "none";
                            document.getElementById("sentence7").style.display = "none";
                            document.getElementById("sentence5").classList.remove("show");
                            document.getElementById("sentence6").classList.remove("show");
                            document.getElementById("sentence7").classList.remove("show");
            
                            // Reset the score to 0 when the form is reset
                            score = 0;
                            scoreElement.textContent = score;
                        };
            
                        window.undoInput = function () {
                            const textbox = document.getElementById("textbox");
                            textbox.value = textbox.value.slice(0, -1);
                            updateSentence4();
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
            
                function showToast() {
                var toast = document.getElementById("toast");
                toast.className = "toast show";
                setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 5000);
            }
                });