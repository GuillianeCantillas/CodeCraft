document.addEventListener("DOMContentLoaded", function () {
    const container1 = document.getElementById("pixel-art-container1");
    const frames1 = container1.querySelectorAll(".pixel-art-frame");
    const container2 = document.getElementById("pixel-art-container2");
    const frames2 = container2.querySelectorAll(".pixel-art-frame");

    let currentFrameIndex = 0;
    interval = 1000;

    function showNextFrame(frames) {
        frames[currentFrameIndex].classList.remove("active");
        currentFrameIndex = (currentFrameIndex + 1) % frames.length;
        frames[currentFrameIndex].classList.add("active");
    }
    
    function startAnimation(frames) {
        currentFrameIndex = 0; // Reset index
        frames[currentFrameIndex].classList.add("active");
        setInterval(() => showNextFrame(frames), interval);
    }

    startAnimation(frames1); // first animation

    setTimeout(() => {
                document.getElementById("sentence2").style.display = "block";
                document.getElementById("sentence2").classList.add("show");
            }, 4000); 

    setTimeout(() => {
                document.getElementById("sentence3").style.display = "block";
                document.getElementById("sentence3").classList.add("show");
              }, 10000); 

    setTimeout(() => {
              document.getElementById("sentence3").style.display = "block";
              document.getElementById("sentence3").classList.add("show");
              }, 15000); 

    setTimeout(() => {
              document.getElementById("sentence4").style.display = "block";
              document.getElementById("sentence4").classList.add("show");
              }, 19000); 

              var sentence4Answered = false; 

              function checkSentence4(userInput) {
                var userInput = document.getElementById("textbox").value.trim();
                  var sentence4 = document.getElementById("sentence4");
                  var correctAnswer4 = "open";
                  var spanClass4 = userInput === correctAnswer4 ? 'correct' : 'incorrect';
              
                  if (userInput === correctAnswer4) {
                      sentence4Answered = true; // Set the flag to true
                      sentence4.innerHTML = "The door seems to be missing a small passcode, <br><br> " +
                          "passcode = new File (\"C:\\dungeon\\LargeSteelDoortxt\");<br><br>" +
                          "public void <span class='" + spanClass4 + "'>" + userInput + "</span> (passcode) throws IOException  <br><br>";
                      document.getElementById("textbox").disabled = true;
              
                      setTimeout(() => {
                          sentence4.innerHTML = "The door seems to be missing a small passcode, <br><br> " +
                              "passcode = new File (\"C:\\dungeon\\LargeSteelDoortxt\");<br><br>" +
                              "public void <span class='correct'>" + correctAnswer4 + "</span> (passcode) throws IOException  <br><br>";
                          document.getElementById("textbox").value = '';
                          document.getElementById("textbox").disabled = false;
                      }, 1000);
              
                      setTimeout(() => {
                          startAnimation(frames2); // second animation
                      }, 12000);
              
                      setTimeout(() => {
                          document.getElementById("sentence5").style.display = "block";
                          document.getElementById("sentence5").classList.add("show");
                      }, 1000);
              
                      setTimeout(() => {
                          document.getElementById("sentence6").style.display = "block";
                          document.getElementById("sentence6").classList.add("show");
                      }, 4000);
              
                      setTimeout(() => {
                          document.getElementById("sentence7").style.display = "block";
                          document.getElementById("sentence7").classList.add("show");
                      }, 8000);
              
                      setTimeout(() => {
                          document.getElementById("sentence8").style.display = "block";
                          document.getElementById("sentence8").classList.add("show");
                      }, 10000);
              
                  } else {
                      sentence4.innerHTML = "The door seems to be missing a small passcode, <br><br> " +
                          "passcode = new File (\"C:\\dungeon\\LargeSteelDoortxt\"); <br><br>" +
                          "public void <span class='incorrect'>" + userInput + "</span> (passcode) throws IOException  <br><br>";
                  }
              }
              
            function checkSentence8(userInput) {
                var sentence8 = document.getElementById("sentence8");
                var textbox = document.getElementById("textbox"); // Ensure this element is selected correctly
                console.log("Sentence 8:", sentence8);
                console.log("Textbox:", textbox);
                var correctAnswer8 = "65";
                var spanClass8 = userInput === correctAnswer8 ? 'correct' : 'incorrect';


                if (!sentence8 || !textbox) {
                    console.error("Sentence 8 or Textbox element not found!");
                    return;
                }

                    if (userInput === correctAnswer8) {
                        sentence8.innerHTML = "Complete the code to verify the number you currently see in your screen. " +
                            "<br><br>public class Chest{<br>int number = <span class='" + spanClass8 + "'>" + userInput + "</span> ;<br>int ChestNumber;<br><br>";


                        setTimeout(() => {
                            document.getElementById("sentence9").style.display = "block";
                            document.getElementById("sentence9").classList.add("show");
                        }, 12000);

                 } else {
                    sentence8.innerHTML = "Complete the code to verify the number you currently see in your screen. <br><br>public class Chest{<br>int number = <span class='incorrect'>" + userInput + "</span>;<br>int ChestNumber;<br><br>";
                }
            }

    document.getElementById("textbox").addEventListener("input", window.updateSentence4);

    window.updateSentence4 = function () {
        var userInput = document.getElementById("textbox").value.trim();
        var sentence4 = document.getElementById("sentence4");
        sentence4.innerHTML = "The door seems to be missing a small passcode, <br><br> " +
            "passcode = new File (\"C:\\dungeon\\LargeSteelDoortxt\"); <br><br>" +
            "public void " + userInput + " (passcode) throws IOException  <br><br>";
    };

    window.updateSentence8 = function () {
        var userInput = document.getElementById("textbox").value.trim();
        var sentence8 = document.getElementById("sentence8");
        sentence8.innerHTML = "Complete the code to verify the number you currently see in your screen. "
        + "<br><br>public class Chest{<br>int number =" + userInput + ";<br>int ChestNumber;<br><br>";
    };

        
});

