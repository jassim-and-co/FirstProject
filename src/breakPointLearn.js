/*

var bill1 = 124, bill2 = 48, bill3  = 268;

    var tip = [];
    var result = [];

function tipCalc() {
        var bills = [bill1, bill2, bill3];
          for (var i = 0; i < bills.length; i++){
              if (bills[i] < 50) {
                  tip.push(bills[i] * .2);
                    result.push((bills[i] * .2)+bills[i])
              } else if (bills[i] > 50 && bills[i] < 200){
                  tip.push(bills[i] * .15);
                  result.push((bills[i] * .15)+bills[i])
              } else if (bills[i] > 200) {
                  tip.push(bills[i] * .1);
                  result.push((bills[i] * .1)+bills[i])
              }
          }return tip+ " result: "+result;
      }
     console.log("Line.№  \n :"+  tipCalc() +"\n"+
     "--------------------------------------------");

function tipCalculator(bill) {
    var percentage;

    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalValues);

*/

function pow(x, n){
    if (n!==1){
        return x * pow(x, n-1);
    }else return x;
}
console.log("Line.№ 49 \n :"+ pow(2, 4) +"\n"+
"------------------------------------------")
