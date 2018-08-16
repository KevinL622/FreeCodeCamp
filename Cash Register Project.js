//FCC Cash Register Project
/*Design a cash register drawer function checkCashRegister() that accepts
purchase price as the first argument (price), payment as the second argument
(cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status
key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less
than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for
the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins
and bills, sorted in highest to lowest order, as the value of the change key.
*/
function checkCashRegister(price, cash, cid) {
  //calculate change due
  var change = cash - price;

  //calculate total amount of money in cash register
  let money = 0;
  for (var i =0; i< cid.length; i++) {
    money += cid[i][1];
  }
  let totalCID = Math.round(100*money)/100;
  console.log(totalCID);



  let obj = {};
  let moneyOut = [];
  //if money in cash register less than change return insufficient funds and empty array
  if (totalCID < change) {
    obj.status = "INSUFFICIENT_FUNDS";
    obj.change = [];
  } else if (totalCID == change) {
    obj.status = "CLOSED";
    obj.change = cid;
  } else {
      if (change > 100) {
        let hundreds = Math.floor(change/100);
        if (cid[8][1] >= change) {
          moneyOut.push(["ONE HUNDRED", (hundreds*100)]);
          change -= (hundreds * 100);
        } else {
          moneyOut.push(["ONE HUNDRED", (cid[8][1])]);
          change -= cid[8][1];
          }
        change = Math.round(100*change)/100;//round to nearest hundreth to prevent float errors
        }
        console.log(change);

      if (change > 20) {
        let twenties = Math.floor(change/20);
        if (cid[7][1] >= change) {
          moneyOut.push(["TWENTY", (twenties*20)]);
          change -= (twenties*20);
        } else {
            moneyOut.push(["TWENTY", (cid[7][1])]);
            change -= cid[7][1];
          }
        change = Math.round(100*change)/100;
      }
      console.log(change);

      if (change > 10) {
        let tens = Math.floor(change/10);
        if (cid[6][1] >= change) {
          moneyOut.push(["TEN", (tens*10)]);
          change -= (tens*10);
        } else {
            moneyOut.push(["TEN", (cid[6][1])]);
            change -= cid[6][1];
          }
        change = Math.round(100*change)/100;
      }
      console.log(change);

      if (change > 5) {
        let fives = Math.floor(change/5);
        if (cid[5][1] >= change) {
          moneyOut.push(["FIVE", (fives*5)]);
          change -= (fives*5);
        } else {
            moneyOut.push(["FIVE", (cid[5][1])]);
            change -= cid[5][1];
          }
          change = Math.round(100*change)/100;
      }
      console.log(change);

      if (change > 1) {
        let ones = Math.floor(change/1);
        if (cid[4][1] >= change) {
          moneyOut.push(["ONE", (ones*1)]);
          change -= (ones*1);
        } else {
            moneyOut.push(["ONE", (cid[4][1])]);
            change -= cid[4][1];
          }
          change = Math.round(100*change)/100;
      }
      console.log(change);

      if (change > .25) {
        let quarters = Math.floor(change/.25);
        if (cid[3][1] >= change) {
          moneyOut.push(["QUARTER", (quarters*.25)]);
          change -= (quarters*.25);
        } else {
            moneyOut.push(["QUARTER", (cid[3][1])]);
            change -= cid[3][1];
          }
          change = Math.round(100*change)/100;
        }
        console.log(change);

      if (change > .1) {
        let dimes = Math.floor(change/.1);
        if (cid[2][1] >= change) {
          moneyOut.push(["DIME", (dimes*.1)]);
          change -= (dimes*.1);
        } else {
            moneyOut.push(["DIME", (cid[2][1])]);
            change -= cid[2][1];
          }
          change = Math.round(100*change)/100;
      }
      console.log(change);

      if (change > .05) {
        let nickels = Math.floor(change/.05);
        if (cid[1][1] >= change) {
          moneyOut.push(["NICKEL", (nickels*.05)]);
          change -= (nickels*.05);
        } else {
            moneyOut.push(["NICKEL", (cid[1][1])]);
            change -= cid[1][1];
          }
          change = Math.round(100*change)/100;
        }
        console.log(change);

      if (change > .01) {
        let pennies = Math.floor(change/.01);
        if (cid[0][1] >= change) {
          moneyOut.push(["PENNY", (pennies*.01)]);
          change -= (pennies*.01);
        } else {
            moneyOut.push(["PENNY", (cid[0][1])]);
            change -= cid[0][1];
        }
        change = Math.round(100*change)/100;
      }
      console.log(change);

      if (change > 0) {
        obj.status = "INSUFFICIENT_FUNDS";
        obj.change = [];
        change = 0;
      } else {
        obj.status = "OPEN";
        obj.change = moneyOut;
      }

  }
  return obj;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
