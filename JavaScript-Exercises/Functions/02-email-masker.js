// ** start of script.js **
// FreeCodeCamp Challenge: Build an Email Masker
function maskEmail(email){
     let endIndex = email.indexOf("@")-1;
     let sliced = email.slice(1,endIndex);
     let repeated = "*".repeat(sliced.length);
     let maskedEmail = email.replace(sliced,repeated);
     return maskedEmail;
}
let email = "loki@email.com"
console.log(maskEmail(email));

// ** end of script.js **

