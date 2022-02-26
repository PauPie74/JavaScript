function addNum(string, repeats, value){
  for(let i = 0; i < repeats; i++){
    string += value
  }
  return string
}

function convertToRoman(num) {
  let Roman = "";
  if (num >= 1000){
    let divide = num/1000;
    Roman = addNum(Roman, Math.trunc(divide), "M");
    let rest = num%1000;
    num = rest;
  };
  if (num < 1000 && num >= 900) {
    Roman += "CM";
    let rest = num - 900;
    num = rest;
  };
  if (num < 900 && num >= 500) {
    let divide = num/500;
    Roman += "D";
    let rest = num-500;
    num = rest;
  };
  if (num < 500 && num >= 400) {
    Roman += "CD";
    let rest = num - 400;
    num = rest;
  };
  if (num < 400 && num >= 100) {
    let divide = num/100;
    Roman = addNum(Roman, Math.trunc(divide), "C");
    let rest = num%100;
    num = rest;
  };
  if (num < 100 && num > 90){
    Roman += "XC";
    let rest = num - 90;
    num = rest;
  };
  if (num < 100 && num >= 50){
    let divide = num/50;
    Roman += "L";
    let rest = num-50;
    num = rest;
  };
  if (num < 50 && num >= 40) {
    Roman += "XL";
    let rest = num - 40;
    num = rest;
  };
  if (num < 40 && num >= 10){
    let divide = num/10;
    Roman = addNum(Roman, Math.trunc(divide), "X");
    let rest = num%10;
    num = rest;
  }
  if (num != 0) {
    if (num == 9) {
      Roman += "IX";
      return Roman;
    } else if (num >= 5) {
      Roman += "V";
      let rest = num - 5;
      num = rest;
    } else if (num == 4) {
      Roman += "IV";
      return Roman;
    };
    if (num != 0){
      Roman = addNum(Roman, num, "I");
      return Roman;
    };
    };
  return Roman
};

convertToRoman(36);