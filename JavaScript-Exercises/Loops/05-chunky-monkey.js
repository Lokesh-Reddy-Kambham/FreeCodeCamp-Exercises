// ** start of script.js **
// FreeCodeCamp Challenge: Implement the Chunky Monkey Algorithm
//My Version 
function chunkArrayInGroups(array,number){
  let count = 0;
  let finalArray = [];
  let subArray = [];
  for (const char of array){
     if(count == number){
       finalArray.push(subArray);
       count = 0;
       subArray = []
      }
      subArray.push(char) 
      count++;
    }
    if (subArray.length>0){
       finalArray.push(subArray)
      }  
  return finalArray
}
//Improved by AI
/*
function chunkArrayInGroups(array,number){
  let finalArray = [];
  let subArray = [];
  for (const char of array){
     if(subArray.length == number){
       finalArray.push(subArray);
       subArray = []
      }
      subArray.push(char) 
    }
    if (subArray.length>0){
       finalArray.push(subArray)
      }  
  return finalArray
}
*/



// ** end of script.js **

