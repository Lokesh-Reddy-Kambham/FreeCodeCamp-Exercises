// ** start of script.js **
// FreeCodeCamp Challenge: Build a Factorial Calculator
let num = 20;
function factorialCalculator(number){
   let result = 1;
   for (let i = 1;i<=number;i++){
     result = result * i;
   }
   return result;
}
const factorial  = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`
console.log(resultMsg)

// ** end of script.js **

