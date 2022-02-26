function telephoneCheck(str) {
  if (/[A-Za-z]/.test(str)){
    return false;
  };
  if (/[!?@#&*]/.test(str)){
    return false;
  };
  if (/\([0-9]{10}\)/.test(str)){
    return false;
  };
  if (/\)-/.test(str)){
    return false;
  };
  if (/ \d{3}[\)|\(]\d{3}-/.test(str)){
    return false;
  };
  if (/^\-/.test(str)){
    return false;
  };
  if (/\d{2} \d{2}-/.test(str)){
    return false;
  };
  if (/^\([\d]*-[\d]*-[\d]*$/.test(str)){
    return false;
  };

  let cleanNumber = "";
  for (let i = 0; i < str.length; i++){
    if (/[0-9]/.test(str[i]) == true){
      cleanNumber += str[i];
    };
  };
  if (cleanNumber.length == 10){
    return true;
  } else if (cleanNumber.length == 11){
    if (/^1/.test(cleanNumber) == true){
      return true;
    } else {
      return false;
    }
  } else {
    return false
  }
};

telephoneCheck("555-555-5555");