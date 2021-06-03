const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ("");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer;("Sally Ride");
let candidateAnswer = ("")
let questions = ["True or false: 5 kilometer == 5000 meters?", "(5 + 3)/2 * 10 = ?","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?","What is the minimum crew size for the ISS?"];
let correctAnswers=["true", "40", "Trajectory","3"];
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
let info = input.question("Candidate Name: ")


}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 let askQuestion = input.question("Who was the first American woman in space? ");
  if (input.question === correctAnswer) {
    console.log("Sally Ride")
  }
for(let i = 0; question.length < 4; i++) {
  console.log(question[i]);
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade; let grade = 
  

  return grade;
}

function runProgram() {
  askForName(); info = String(info);

  // TODO 1.1c: Ask for candidate's name //
  askForName(); console.log( candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};