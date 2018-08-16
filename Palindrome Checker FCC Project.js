//This function checks strings to see if it is a palindrome ignoring symbols
function palindrome(str) {
  //turn string to lower case
  let lowerCaseStr = str.toLowerCase();

  //turn str to an array
  let strArr = lowerCaseStr.split('');
  console.log(strArr);

  //remove all non-alphanumeric characters
  for (var i=0; i<strArr.length; i++) {
    if (!/[a-zA-Z0-9]/.test(strArr[i])) {
      delete strArr[i];
    }
  }

  //get rid of empty array indices
  strArr = strArr.join('').split('');

  //convert array to string in both forward and reverse order
  let forwardString = strArr.join('');
  let reverseString = strArr.reverse().join('');
  console.log(forwardString);
  console.log(reverseString);

  //check if the strings are equal to be a palindrome
  if (forwardString === reverseString) {
    return true;
  } else{
    return false;
  }
}

palindrome("Eye");
