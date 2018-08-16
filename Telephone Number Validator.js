//FCC Telephone Number Validator Project
//This function returns true if the argument looks like a telephone number
function telephoneCheck(str) {
  //turn string into an array
  let arr = str.split('');
  console.log(arr);

  //find out how many number values are in the array
  let count=0;
  let parentheses = 0;
  for (var i =0; i<arr.length; i++) {
    if(/[0-9]/.test(arr[i])) {
      count++;
    }
    if(arr[i].search(/[()]/) > -1) {
      parentheses++;
    }
  }

  if(count < 10 || count > 11) {
    return false;
  }

  if (count == 11 && arr[0] != 1) {
    return false;
  }

  if (count == 11 && arr[5] == ")" && arr[1] != "(") {
    return false;
  }

  if (parentheses > 2) {
    return false;
  }

  if (arr[0] == "(" && arr[4] != ")" || arr[3] == ")" && arr[0] != "(") {
    return false;
  }

  if (arr[3] == "-" && arr[7] != "-") {
    return false;
  }


  console.log(count);
  return true;
}

telephoneCheck("555-555-5555");
