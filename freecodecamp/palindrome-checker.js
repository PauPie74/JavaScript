function reverseWord(word) {
  let newStr = "";
  for(var i = word.length - 1; i >= 0; i--) {
    newStr += word[i];
  }
  return newStr;
}

function deleteSpecial(word){
  let newStr = "";
  for(var i = 0; i < word.length; i++) {
    if (/[A-Za-z0-9]/.test(word[i]) === true){
      newStr += word[i];
    }
  }
  return newStr;
}

function palindrome(str) {
  str = str.toLowerCase();
  let cleanStr = deleteSpecial(str);
  let reverseStr = reverseWord(cleanStr);
  if (cleanStr === reverseStr){
    return true
  } else {
    return false
  }
}