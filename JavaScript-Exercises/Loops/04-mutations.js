// ** start of script.js **
// FreeCodeCamp Challenge: Implement the Mutations Algorithm
function mutation(array){
   for (const letter of array[1].toLowerCase()){
     if (!(array[0].toLowerCase().includes(letter))){
        return false
     }
   }
   return true
}

// ** end of script.js **

