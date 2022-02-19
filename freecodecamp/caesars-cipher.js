function rot13(str) {
  let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let decode = "";
  for(let i = 0; i < str.length; i++){
    if(/[A-Za-z]/.test(str[i]) == false){
      decode += str[i];
    } else {
      let position = alphabet.indexOf(str[i]);
      let cPosition = alphabet.indexOf(str[i]) + 13;
      if (cPosition >= 26) {
        cPosition -= 26;
      };
      decode += alphabet[cPosition];
    };
  };
  return decode;
};

rot13("SERR PBQR PNZC");
