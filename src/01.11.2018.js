let table2 = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
  e: 50,
  f: 60,
  g: 70,
  h: 80,
  i: 90,
  k: 100
};

function multiplyNumeric() {
  var result = 0;
  var sumAllValues = 0;
  var avg = 0;
  var count = 0;
  var compare = 0;
  var max = 0;
  var maxPrint = 0;

  for (var x in table2) {
    result = table2[x];
    if (result > 10 && result < 50) {
      table2[x] *= 2;
      console.log("\n" + result);
    }
    if (max < table2[x]) {
      max = table2[x];
      maxPrint = max;
    }
    count++;
    sumAllValues = avg += table2[x];
  }
  avg = sumAllValues / count;
  console.log(
    "\n" +
      "Quantity of properties in object = " +
      +count +
      "\n" +
      "\n" +
      "Max value = " +
      maxPrint +
      "\n" +
      "average value = " +
      avg
  );
  console.log(table2);
} //multiplyNumeric(table2);

("use strict");

function findCombinationFor(arg1, arg2) {
  let sourceNum = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9
  };
  var a = 0,
    b = 0;

  var iterations = 1;
  var result = temp;
  var temp;
  var print = "";
  for (var x in sourceNum) {
    a = sourceNum[x];
    for (var y in sourceNum) {
      var b = sourceNum[y];
      for (var z in sourceNum) {
        var c = sourceNum[z];
        var sum = a + b + c;
        var mult = a * b * c;
        if (mult === arg1 || mult === arg2 || sum === arg1 || sum === arg2) {
          print =
            "Found combination for number " +
            arg1 +
            " or " +
            arg2 +
            ":" +
            " \n ";
          console.log(print);
          iterations++;
          var l = a + " x " + b + " x " + c + " = " + mult + " ";
          var s = a + " + " + b + " + " + c + " = " + sum + "\n";
          console.log(l);
          console.log(s);
        }
      }
    }
  }
}
//findCombinationFor();

function exponent(base, exponent) {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    console.log(result);
    result *= base;
  }
  return result;
}
//console.log(exponent(2, 3));

function fibonacci(arg) {
  var result_a = 1,
    result_b = 1,
    sum = 0;

  for (var i = 0; i <= arg; i++) {
    sum = result_a + result_b;
    result_a = result_b;
    result_b = sum;
  }
  return result_b;
}
//fibonacci(7);

function sqrt(arg) {
  let result = 0;
  let x = 1;
  let y = 1;
  while (result < arg) {
    x++;
    y++;
    result = x * y;
  }
  return x;
}

// export default sqrt;

function myMathPow(base, exponent) {
  let result = 1;
  for (var i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
}

function fi(arg) {
  let a = 1;
  let b = 1;
  let c = 0;
  for (let i = 0; i <= arg; i++) {
    c = a + b;
    a = b;
    b = c;
    console.log(c);
  }
  return b;
}
//console.log(fi(7) + "\n");
//console.log(fibonacci(7));

let obj = {
  a: 500,
  b: 30,
  c: 100,
    d:700
};
function count_max_val() {
  let max_value ;
  let value = 0;
  for (var temp in obj) {
    if (value < obj[temp]) {
      value = obj[temp];
      max_value = value;
    }
  }
  return "max_value: " + max_value + "\n\n";
}
console.log(count_max_val());

let arr = Object.values(obj);
let min = Math.min(...arr);
let max = Math.max(...arr);

//console.log("MinValue: " + min + "\n" + "MaxValue: " + max);




function count_min_value() {
  let min_value = obj.d;
    var temp = 0;
      for (let num in obj) {
        temp = obj[num];
          if(min_value > obj[num]){
            min_value = obj[num];

          }
         }return "Return: "+min_value;
}
console.log(count_min_value());


//export default count_min_val();