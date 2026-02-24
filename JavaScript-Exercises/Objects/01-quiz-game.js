// ** start of script.js **
// FreeCodeCamp Lab: JavaScript Quiz Game
const questions= [
  {
   category:"variables",
   question:"How many ways we can declare a variable in JavaScript ?",
   choices:["1","2","3"],
   answer:"3"
  } ,
  {
   category:"operators",
   question:"which operator is used to get remainder ?",
   choices:["+","**","%"],
   answer:"%"
  } ,
  {
   category:"Object",
   question:"Using Which notation we can access object properties which are invaild identifiers ?",
   choices:["dot-notation","square-notation","using both"],
   answer:"square-notation"
  }, 
  {
   category:"Strings",
   question:"Which operator is used to Concatenate the String ?",
   choices:["+","++","->"],
   answer:"+"
  } ,
  {
   category:"Function",
   question:"Which keyword is used to define or create a Function ?",
   choices:["define","func","function"],
   answer:"function"
  } 
]
function getRandomQuestion(questionsList){
  let randomQuestion = Math.floor(Math.random()*questionsList.length);
  return questionsList[randomQuestion]
}
function getRandomComputerChoice(choicesList){
  let randomChoice = Math.floor(Math.random()*choicesList.length);
  return choicesList[randomChoice]
}
function getResults(question,choice){
  if (question.answer == choice){
    return "The computer's choice is correct!"
  }
  else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}

// ** end of script.js **

