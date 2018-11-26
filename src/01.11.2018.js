let table2 = {
  a: 10, b: 20, c: 30,
  d: 40, e: 50, f: 60, g: 70, h: 80, i: 90, k: 100
};

function multiplyNumeric() {
  var result = 0;
  var sumAllValues = 0;
  var avg = 0;
  var count = 0;
  var compare = 0;
  var max = 0;
  var print_max = 0;

  for (var x in table2) {
    result = table2[x];{
      table2[x] *= 2;
    }
    if (max < table2[x]) {
      max = table2[x];
      print_max = max;
    }
    count++;
    sumAllValues += table2[x];
  }
  avg = sumAllValues / count;
  console.log("\n"+"Quantity of properties in object : " + count +
      "\n" + "Max value = " + print_max +", " + " average value = " + avg+"\n"
      + "Sum of values = "+ sumAllValues+"\n"
      +"---------------------------------------------------------------------"
  );
} //multiplyNumeric(table2);

("use strict");

function findCombinationFor(arg1, arg2) {
  let sourceNum = {
    a: 1, b: 2, c: 3, d: 4,
    e: 5, f: 6, g: 7, h: 8,
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
          print = "Found combination for number " + arg1 + " or " + arg2 + ":" + " \n ";
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
fibonacci(9);

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


function myMathPow(base, exponent) {
  let result = 1;
  for (var i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
}



let obj = {
  a: 500,
  b: 30,
  c: 100,
    d:700,
    e:0.5
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
  return "\n"+"max_value: " + max_value + "\n";
} //console.log(count_max_val());

let arr = Object.values(obj);
let min = Math.min(...arr);
let max = Math.max(...arr);

//console.log("Math.min and Math.max functions:"+"\n "+"MinValue: " + min + "\n" + "  MaxValue: " + max+ "\n"
//+"---------------------------------------------------------------");




function count_min_value() {

  let min_value = obj["a"];

  var temp = 0;
      for (let num in obj) {
        temp = obj[num];
          if(min_value > obj[num]){
            min_value = obj[num];

          }
         }return "function count_min_value: "+'\n'+min_value+"\n"+
        "--------------------------------------------------------";
}
//console.log(count_min_value());


//export default count_min_val();

function showProps(obj, objName) {
  var result = "";
  for (var i in obj){

    if(obj.hasOwnProperty(i)){
        result += objName + " " + i + " : " + obj[i] + "\n";

    }
  }return result;
}

//console.log( showProps(obj, "Values"));


function exponent(base, n) {
    if (n != 1) {
        return base * exponent(base, n - 1);
    } else
    return base;
}
console.log("№ 173 : \n"+ exponent(2,3) +"\n"+
"---------------------------------------------")

function fac(n) {
    if(n === 1) {
        return 1;
    }else{
        return n * fac(n-1);
    }
}//console.log(fac(3)); //Рекурсия факториал

function sumTill(x) {
    var sum = 0, add = 1;
    for(var i = 0; i < x; i++){
         sum += add;
         add++;
    }return sum;
} //Сложение до ста при помощи цикла
//console.log(sumTill(100));

function sumTo(n) {
  var result =0;
  console.log(n)
    if (n === 1)
      return 1;
    else{
    result = n + sumTo(n - 1)
        return result;
    }
}


//console.log(sumTo(100))

var obj2 = {
  a : "blue",
    b: 1924,
     c: function year(year) {
         for (var i in obj2) {
             if (year === obj2[i]){
                 var print = obj2.a + " " + obj2.b;
             }//else{ print = year +" year not found, please input another value"}

  }return print
}
}

function f() {
    let counter = 0;
   for (var temp in obj) {
      counter++;
  console.log("№ 227 : \n"+obj[temp]+" "+counter  +"\n"+
  "---------------------------------------------");
}return counter;
}
//console.log(f());

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42", city: "Los Angeles"
    }
};


