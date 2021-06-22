const chalk = require('chalk');
const log = console.log;
//log(chalk.red("Hello ") + chalk.blue("World!"));
var readlinesync = require("readline-sync");
var score = 0;
var userName = readlinesync.question("May I have your name Please? ");
log(chalk.blue("Hey " + userName + "!!!How well do you know your Superheroes? Let's Find Out..."));
  //Define a function
function play(question, answer)
{
  var userAnswer = readlinesync.question(question);
  if (userAnswer === answer)
  {
    log(chalk.green.italic("Bingo!You are Right!!!"))
    // log(chalk.blue("Wow!!!Congratulations"))  
    log(chalk.blue("Continue to play..."))
    score = score + 1;
  }
 else
  {
    log(chalk.red.bold("Oops!You are Wrong!!!"))
    log(chalk.blue("Your game ends here"))
    play();
  }
}
var questionOne = 
{
  question: "The Man of Steel is another name for which superhero?",
  answer: "Superman"
}
var questionTwo = 
{
  question: "What is the real name of Batman?",
  answer: "Bruce Wayne"
}
var questionThree = 
{
  question: "Batman protects which city?",
  answer: "Gotham City"
}
var questionFour = 
{
  question: "Which of the following superheroes says that Dont make me angry; you wouldnt like me when I am angry?",
  answer: "Hulk"
}
var questionFive = 
{
  question: "Which superhero has super tools such as the magic lasso and bullet-proof bracelets?",
  answer: "Wonder Woman"
}
var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive];
for (var i=0;i<questions.length;i++)
{
  var currentQues = questions[i];
  play(currentQues.question,currentQues.answer);
}
console.log("YOUR TOTAL SCORE IS: " + score);
