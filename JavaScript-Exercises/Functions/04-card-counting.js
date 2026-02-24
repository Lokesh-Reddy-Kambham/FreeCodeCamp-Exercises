// ** start of script.js **
// FreeCodeCamp Lab: Counting Cards
let count = 0;
function cardCounter(card){
  if (card >= 2 && card <= 6){
    count += 1;
  }
  else if ( card >= 7 && card <=9 ){
     count = count ;
     // no change
  }
  else {
    count -=1; 
  }
  if (count <= 0){
    return `${count} Hold`;
  }
  else{
    return `${count} Bet`;
  }
}



// ** end of script.js **

