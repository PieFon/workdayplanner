//TODO: GIVEN I am taking a code quiz
        // -created index.html titled CODE QUIZ

//TODO: WHEN I click the start button
// THEN a timer starts and I am presented with a question
    // use for timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 3600;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left to finish the quiz.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();

// TODO: WHEN I answer a question
//       THEN I am presented with another question

// TODO: WHEN I answer a question incorrectly
//      THEN time is subtracted from the clock

// TODO: WHEN all questions are answered or the timer reaches 0
//      THEN the game is over

// TODO: WHEN the game is over
//       THEN I can save my initials and score