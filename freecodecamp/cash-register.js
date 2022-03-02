function checkCashRegister(price, cash, cid) {
  let register = {
    status: "OPEN",
    change: []
  }
  
  let nominals = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let change = cash - price;

  let moneyInReg = 0;
  
  for (let i = cid.length - 1; i >= 0; i--){
    moneyInReg += cid[i][1];
  };
  
  if (moneyInReg < change){
    register.status = "INSUFFICIENT_FUNDS"
    return register
  };

  for (let i = cid.length - 1; i >= 0; i--){
    if (change >= nominals[i]){
        let amount = 0;
        for (let x = 1; change > 0 && change >= nominals[i] && cid[i][1] != 0; x++){
          change -= nominals[i];
          change = change.toFixed(2)
          cid[i][1] -= nominals[i];
          cid[i][1] = cid[i][1].toFixed(2);
          amount = x; }
        register.change.push([cid[i][0], amount * nominals[i]])
    };
  };

  let changeMoney = 0;
  for (let i = 0; i < register.change.length; i++){
    changeMoney += register.change[i][1];
  };
  
  changeMoney = changeMoney.toFixed(2)
  if (changeMoney != (cash - price)){
    register.status = "INSUFFICIENT_FUNDS";
    register.change = [];
    return register;
  };

  moneyInReg = 0;
  for (let i = cid.length - 1; i >= 0; i--){
    moneyInReg += cid[i][1];
  };

  if (moneyInReg == 0){
    register.status = "CLOSED";
  }
  
return register;}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);