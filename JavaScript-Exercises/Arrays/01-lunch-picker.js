// ** start of script.js **
// FreeCodeCamp Challenge: Build a Lunch Picker Program
let lunches = []


function addLunchToEnd(array1,string1){
  array1.push(string1);
  console.log(`${string1} added to the end of the lunch menu.`);
  return array1;
}


function addLunchToStart(array2,string2){
  array2.unshift(string2);
  console.log(`${string2} added to the start of the lunch menu.`);
  return array2;
}


function removeLastLunch(array3){
  if (array3.length == 0){
    console.log("No lunches to remove.");
  }else {
  let element = array3.pop();
  console.log(`${element} removed from the end of the lunch menu.`);
  return array3;
  }
}


function removeFirstLunch(array4){
  if (array4.length == 0){
    console.log("No lunches to remove.");
  }
  else {
  let element = array4.shift();
  console.log(`${element} removed from the start of the lunch menu.`);
  return array4;
  }
}


function getRandomLunch(array5){
  if (array5.length == 0){
    console.log("No lunches available.");
  }else {
  let randomElement = Math.floor(Math.random()*array5.length)
  console.log(`Randomly selected lunch: ${array5[randomElement]}`)
  }
}
function showLunchMenu(array6){
  if (array6.length == 0){
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${array6.join(", ")}`)
  }
}



// ** end of script.js **

