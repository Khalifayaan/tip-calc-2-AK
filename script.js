

function calcTip(bill) {
    let tip;
  
    if (bill >= 50 && bill <= 300) {
      tip = bill * 0.15; // 15% tip
    } else {
      tip = bill * 0.20; // 20% tip
    }
  
    return tip;
  }
  
  // Bill amount
  let bill = 500;
  let tipAmount = calcTip(bill);
  console.log("The bill is " + bill + ", the tip amount is " + tipAmount);
  