// making proper variabe for the interaction

const enterbutton = document.querySelector("#userbutton");
const homecontainer = document.querySelector(".home_container");
const quizbox = document.querySelector(".quiz_container");
const resultbox = document.querySelector(".result_container");
const timetext = document.querySelector(".timer");
const question_options = document.querySelector(".que_options");
const timeCount = document.querySelector(".timecount");
const score = document.querySelector(".score");
const usernameof = document.getElementById("userap");
const subject_title = document.getElementById("subject");

// Click Button
enterbutton.onclick = () => {
  var radio = document.getElementsByName("categ");
  var x = document.getElementById("username").value;
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      var checkedop = true;
      var selected_category = radio[i].value;
    }
  }
  if (checkedop && x == "") {
    alert("Please Enter Your Name");
  } else if (!checkedop && x != "") {
    alert("Please Select category");
  } else if (checkedop && x != "") {
    console.log(selected_category);
    homecontainer.classList.add("deactivehome");
    quizbox.classList.add("activequiz");
    subject_title.innerHTML = selected_category;
    usernameof.innerHTML = "<b>" + x + "</b> Your result is :";
    showQuetions(0, selected_category);
    queCounter(1);
    startTimer(10);
  } else {
    alert("Please Enter Your Name and Select Category");
  }
};

// Timer initilization

let timeValue = 10;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

// Buttons at the results page

const startagain = document.querySelector("#startagain");
const gotohome = document.querySelector("#go_to_home");

// After clicked on start again

startagain.onclick = () => {
  quizbox.classList.add("activequiz");
  resultbox.classList.remove("activeresult");
  timeValue = 10;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  showQuetions(que_count);
  queCounter(que_numb);
  clearInterval(counter);
  startTimer(timeValue);
  next_button.classList.remove("show");
};

const next_button = document.querySelector(".next_que");
const question_counter = document.querySelector(".question_no");

// After Clicking on go to home

gotohome.onclick = () => {
  window.location.reload();
};

// After Clicking on Next Button
next_button.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuetions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    timerbox.style.color = "#1fa8e7";
    timerbox.style.borderColor = "#1fa8e7";
    next_button.classList.remove("show");
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    showResult();
  }
};

// getting questions and options from array
function showQuetions(index, sel_cat) {
  console;
  if (sel_cat == "Pipes And Cisterns") {
    questions = pipesAndCisternsQuestions;
  } else if (sel_cat == "Probability") {
    questions = probabilityQuestions;
  } else if (sel_cat == "Problem On Ages") {
    questions = problemsOnAgeQuestions;
  } else {
    questions = profitAndLossQuestions;
  }
  const que_text = document.querySelector(".question");

  let que_tag = "<span>" + questions[index].question + "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag;
  question_options.innerHTML = option_tag;

  const option = question_options.querySelectorAll(".option");

  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

var attempted = 0;
function optionSelected(correctAnswer) {
  clearInterval(counter);
  attempted++;
  let userAns = correctAnswer.textContent;
  let correcAns = questions[que_count].correctAnswer;
  const allOptions = question_options.children.length;

  if (userAns == correcAns) {
    userScore += 1;
    score.innerHTML = "SCORE:" + "<b>" + userScore + "<b>";
    correctAnswer.classList.add("correct");
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  } else {
    correctAnswer.classList.add("incorrect");
    console.log("Wrong Answer");

    for (i = 0; i < allOptions; i++) {
      if (question_options.children[i].textContent == correcAns) {
        question_options.children[i].setAttribute("class", "option correct");
        console.log("Auto selected correct answer.");
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    question_options.children[i].classList.add("disabled");
  }
  next_button.classList.add("show");
}

// fShowing Result
const totaltimetaken = document.getElementById("timetaken");
const attemptedquestion = document.getElementById("attempted");
const totalquestions = document.getElementById("totalquestions");
const correctquestions = document.getElementById("correct");
const wrongquestions = document.getElementById("wrong");
const percentages = document.getElementById("percentage");
function showResult() {
  homecontainer.classList.add("deactivehome");
  quizbox.classList.remove("activequiz");
  resultbox.classList.add("activeresult");
  totaltimetaken.innerHTML = "Total time taken :<b>" + totaltime + " seconds";
  attemptedquestion.innerHTML = "Attempted :<b>" + attempted + "<b>";
  correctquestions.innerHTML = "Correct :<b>" + userScore + "</b>";
  wrongquestions.innerHTML =
    "Wrong :<b>" + (questions.length - userScore) + "</b>";
  totalquestions.innerHTML = "Total Questions :<b>" + questions.length + "</b>";
  percentages.innerHTML =
    "Percentage :<b>" + (userScore / questions.length) * 100 + "%</b>";

  console.log(totaltime);
}

const timerbox = document.querySelector(".timer");
// Timer Countdown
var totaltime = 0;
function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    totaltime++;
    time--;

    if (time < 9) {
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero;
    }
    if (time < 5) {
      timerbox.style.color = "red";
      timerbox.style.borderColor = "red";
    }
    if (time < 0) {
      clearInterval(counter);
      timeCount.textContent = "00";
      const allOptions = question_options.children.length;
      let correcAns = questions[que_count].correctAnswer;
      for (i = 0; i < allOptions; i++) {
        if (question_options.children[i].textContent == correcAns) {
          question_options.children[i].setAttribute("class", "option correct");
          console.log("Time Off: Auto selected correct answer.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        question_options.children[i].classList.add("disabled");
      }
      next_button.classList.add("show");
    }
  }
}

// question counter
function queCounter(index) {
  let totalQueCounTag = "<b>" + index + "/" + questions.length + "</b>";
  question_counter.innerHTML = totalQueCounTag;
}
