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
                        const container = document.getElementById('pixel-art-container3');
                        const button1 = document.querySelector('.button1');
                        const button2 = document.querySelector('.button2');
                        const button3 = document.querySelector('.button3');
                        const scores = document.getElementById('score-container');
                        const hinting = document.getElementById('hintBox');
                        let hintIndex = 0;
                        const hints = [
                            "Hint 1: This will skip the current iteration and move to the next iteration of the loop.",
                            "Hint 2: Use this to avoid executing certain code within the loop for specific conditions.",
                            "Hint 3: Bypasses the remaining statements in the loop body and jumps to the next iteration."];

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
            const frames3 = document.querySelectorAll(".pixel-art-frame");
            let animationInterval;
            
            function showNextFrame(frames) {
                frames[currentFrameIndex].classList.remove("active");
                
                if (frames[currentFrameIndex].id === 'img22') {
                    currentFrameIndex = frames[currentFrameIndex + 1].id === 'img23' ? currentFrameIndex + 1 : currentFrameIndex;
                } else if (frames[currentFrameIndex].id === 'img23') {
                    currentFrameIndex = frames[currentFrameIndex - 1].id === 'img22' ? currentFrameIndex - 1 : currentFrameIndex;
                } else {
                    currentFrameIndex = (currentFrameIndex + 1) % frames.length;
                }
            
                frames[currentFrameIndex].classList.add("active");
            }
            
                function startAnimation(frames) {
                    currentFrameIndex = 0; // Reset index
                    frames[currentFrameIndex].classList.add("active");
                    animationInterval = setInterval(() => showNextFrame(frames), interval);
                }
            
                setTimeout(() => {
                    startAnimation(frames3); 
                }, 1000);
            
            
               setTimeout(() => {
                            document.getElementById("sentence10").style.display = "block";
                            document.getElementById("sentence10").classList.add("show");
                          }, 1000); 
            
                setTimeout(() => {
                          document.getElementById("sentence11").style.display = "block";
                          document.getElementById("sentence11").classList.add("show");
                          }, 8000); 
            
                setTimeout(() => {
                          document.getElementById("sentence12").style.display = "block";
                          document.getElementById("sentence12").classList.add("show");
                          }, 15000); 
            
                setTimeout(() => {
                          document.getElementById("sentence13").style.display = "block";
                          document.getElementById("sentence13").classList.add("show");
                          }, 17000); 
            
            
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
            
            window.checkAnswer13 = function() {
                
              var userInput = document.getElementById("textbox").value.trim();
              var sentence13 = document.getElementById("sentence13");
              var correctAnswer = "continue";
              var spanClass = userInput === correctAnswer ? 'correct' : 'incorrect';
            
                    if (userInput === correctAnswer) {
                        const endTime = Date.now();
                        const elapsedTime = (endTime - startTime) / 1000;
                        console.log(`Time taken: ${elapsedTime} seconds`);
                        newScore = score + 11; 
                        updateScore(newScore);
                        sentence13.innerHTML = "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if (yourAnswer.equalsIgnoreCase('Yes')) { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; System.out.println('Well, go on then!'); <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class='" + spanClass + "'>" + userInput + "</span>; <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; } else if (yourAnswer.equalsIgnoreCase('No')) { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; System.out.println('I'm sorry to hear that.');<br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break;<br>" + 
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; } else { <br>" + 
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; System.out.println('What would you like to do?'); <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }";
                            document.getElementById("textbox").disabled = true;
                        
                        setTimeout(() => {
                            document.getElementById("sentence14").style.display = "block";
                            document.getElementById("sentence14").classList.add("show");
                          }, 2000);
            
                        setTimeout(() => {
                            window.location.href = 'https://guillianecantillas.github.io/CodeCraft/IngameHorror4.html';
                        }, 9000);
                        
                    } else {
                        sentence13.innerHTML = "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if (yourAnswer.equalsIgnoreCase('Yes')) { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; System.out.println('Well, go on then!'); <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class='" + spanClass + "'>" + userInput + "</span>; <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; } else if (yourAnswer.equalsIgnoreCase('No')) { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; System.out.println('I'm sorry to hear that.');<br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break;<br>" + 
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; } else { <br>" + 
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; System.out.println('What would you like to do?'); <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }";
                    };
                };
            
                console.log("Current Score:", score);
                console.log("New Score:", newScore);  
            
            
                window.updateSentence13 = function () {
                    var userInput = document.getElementById("textbox").value.trim();
                    var sentence13 = document.getElementById("sentence13");
                    sentence13.innerHTML = "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if (yourAnswer.equalsIgnoreCase('Yes')) { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; System.out.println('Well, go on then!'); <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + userInput + "; <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; } else if (yourAnswer.equalsIgnoreCase('No')) { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; System.out.println('I'm sorry to hear that.');<br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break;<br>" + 
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; } else { <br>" + 
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; System.out.println('What would you like to do?'); <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }";
                };
                        window.resetForm = function () {
                            document.getElementById("answerForm").reset();
                            sentence13.innerHTML = "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if (yourAnswer.equalsIgnoreCase('Yes')) { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; System.out.println('Well, go on then!'); <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ________; <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; } else if (yourAnswer.equalsIgnoreCase('No')) { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; System.out.println('I'm sorry to hear that.');<br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break;<br>" + 
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; } else { <br>" + 
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; System.out.println('What would you like to do?'); <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }";     
                            document.getElementById("textbox").disabled = false;
                            document.getElementById("sentence14").style.display = "none";
                            document.getElementById("sentence14").classList.remove("show");
            
                            score = 0;
                            scoreElement.textContent = score;
                        };
            
                        window.undoInput = function () {
                            var textbox = document.getElementById("textbox");
                            textbox.value = textbox.value.slice(0, -1);
                            updateSentence13();
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