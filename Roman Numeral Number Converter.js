//FCC Project to convert numbers into roman numerals
function convertToRoman(num) {
  //check how many 1000s, 900s, 500s, 400s, 100s, 50s, 40s, 10s, 9s, 5s, 4s, 1s
  /*For Reference
  1 = I
  4 = IV
  5 = V
  9 = IX
  10 = X
  40 = XL
  50 = L
  90 = XC
  100 = C
  400 = CD
  500 = D
  900 = CM
  1000 = M
  */
  let arr=[];
  let thousands = Math.floor(num/1000);
  for (var i=0; i<thousands; i++) {
    arr.push("M");
  }

  let a = num % 1000; //remainder after thousands decimal place
  let nineHundreds = Math.floor(a/900);
  for (var i=0; i<nineHundreds; i++) {
    arr.push("CM");
  }

  if (a < 900 && a >=500) {
    arr.push("D");
    let afterFiveHundred = Math.floor((a % 500)/100);
    for (var i=0; i<afterFiveHundred; i++){
      arr.push("C");
    }
  }

  if (a < 500) {
    let fourHundreds = Math.floor(a/400);
    for (var i=0; i<fourHundreds; i++) {
      arr.push("CD");
    }
  }

  if (a < 400) {
    let hundreds = Math.floor(a/100);
    for (var i=0; i<hundreds; i++) {
      arr.push("C");
    }
  }

  //check for the less than a hundred numbers based on remainder
  let b = num % 100;
  if (b >= 90) {
    arr.push("XC");
  }

  if (b < 90 && b >= 50) {
    arr.push("L");
    let e = Math.floor((b % 50)/10);
    for (var i=0; i<e; i++){
      arr.push("X");
    }
  }

  if (b < 50 && b >= 40) {
    arr.push("XL");
  }

  if (b < 40 ) {
    let tens = Math.floor(b/10);
    for (var i =0; i<tens; i++) {
      arr.push("X");
    }
  }

//Find remainder in the single digits
  let c = num % 10;
  if (c >= 9) {
    arr.push("IX");
  }

  let d = c % 5;
  if (c < 9 && c >= 5) {
    arr.push("V");
    for (var i=0; i< d; i++) {
      arr.push("I");
    }
  }

  if (c == 4) {
    arr.push("IV");
  }

  if (c < 4) {
    for (var i=0; i< c; i++) {
      arr.push("I");
    }
  }

//join the array together to form a string
  return arr.join('');
}

convertToRoman(3600);
