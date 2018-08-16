//FCC Caesar's Cipher Project
//function converts all upper case ROT13 code to normal string
function rot13(str) { // LBH QVQ VG!
//form arrays of alphabet and corresonding ROT13 code order
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
 "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let ROT13 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];

//turn argument into an array
let arrStr = str.split('');
for(var i=0; i<arrStr.length; i++) {
    if(/[A-Z]/.test(arrStr[i])) {
        let index = alphabet.indexOf(arrStr[i]);
        arrStr[i] = ROT13[index];
    }
}
console.log(arrStr);
let message = arrStr.join('');
return message;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
