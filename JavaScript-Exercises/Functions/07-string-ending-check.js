// ** start of script.js **
// FreeCodeCamp Challenge: Implement a String Ending Checker
function confirmEnding(string1,string2){
  if (string1.slice(-string2.length) == string2){
    return true;
  }
  return false;
}

// ** end of script.js **

