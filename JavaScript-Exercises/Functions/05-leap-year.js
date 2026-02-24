// ** start of script.js **
// FreeCodeCamp Challenge: Build a Leap Year Calculator
function isLeapYear(year){
  if (year%4 == 0 && year%100 != 0){
    return `${year} is a leap year.`
  }else if (year%400 == 0){
     return `${year} is a leap year.`
  }
  else{
    return `${year} is not a leap year.`
  }
}
let year = 240;
let result = isLeapYear(year);
console.log(result);

// ** end of script.js **

