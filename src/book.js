
// var counter = 1;
// var print = "#";
// while (counter < 8){
//     console.log(print);
//     print +="#";
//     counter = counter+=1;
// };
//
// for (var n = 1; n <= 100; n++) {
//     var output = "";
//     if (n % 3 == 0)
//         output += "Fizz";
//     if (n % 5 == 0)
//         output += "Buzz";
//     console.log(output || n);
// };
//
// let size = 16;
//
// let board = " ";
//
// for (let y = 0; y < size; y++) {
//     for (let x = 0; x < size; x++) {
//         if ((x + y) % 2 == 0)
//             board += " ";
//         else
//             board += "#";
//     }
//     board += "\n";
// };
//
// console.log(board);
//
// var result = 7;
// while (result < 98){
//     console.log(result+=7);
// }
//
// var result = 1;
// var input = 1
// var count = 0;
// for  (i = 0; i <= 10; i++ ){
// count +=1;
// }console.log(result);
//
// function f(x, y) {
//     var remain =  (x % y);
//     return remain;
// }console.log(f(64, 7) );
//
// function sum (...numbers) {
//     let sum = 0;
//
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }
//
// function avg(...numbers) {
//     return sum(...numbers)/numbers.length;
// }
//
//     console.log(avg(7, 45, 23, 44));
//     //export default avg;
//
//
//
// var x = avg(2, 23,45,78);
//
// "\n\n"
//
//
// var f1 = function () {
//     var x = "value inside function f1";
//     return x;
// }
//
// var f2 = function () {
//       // var x = f1();
//       console.log(x);
//       return f1();
// }
// console.log(f2());
//
//
//
// console.log("The future says:", future());
// function future() {
//     return "We STILL have no flying cars.";
// }
//
//
//
//
// function multiplayer(factor) {
//     return function (number) {
//         return factor * number;
//         };
// }
// var twice = multiplayer(5);
// console.log (twice(2));
//
//
//
// var listOfNumbers = [2, 3, 5, 7, 11];
// console.log(listOfNumbers[3]);
//
// function random (){
//     return Math.floor(Math.random() * 2);
// }
// console.log (random());
//
//
// function power(base, exponent) {
//      if (exponent == undefined)
//             exponent = 2;
//              var result = 1;
//                 for (var count = 0; count <= exponent; count++)
//         result*= base;
//
//     return result;
// }
// console.log(power(2, 4));
//
// function printNumbers() {
//     count = 4;
//     for (i = 0; i < 400; i++) {
//         console.log(count);
//         count++;
//     }
//
//
//     return count;
// }
//
// // console.log(printNumbers());
//
//
// function printNumbers2() {
//     count = 4;
//     for (i = 0; i < 3; i++) {
//         console.log(count);
//         count = count + 3;
//     }
//
//     return count;
// }
//
// // console.log(printNumbers2());
//
//
// function toless() {
//     count = 654;
//     for (i = 654; i > 0; i--) {
//         console.log(count);
//         count = count - 1;
//     }
//     return count;
// }
//
// // console.log(toless());
//
// function years() {
//     var startFromYear = 1983;
//     for (i = 0; i < 34; i++) {
//         console.log(startFromYear);
//         startFromYear += 1;
//     }
//     return startFromYear;
// }
//
// //console.log(years())
//
// function years2() {
//     var startFromYear = 1983;
//     while (startFromYear < 2018) {
//         console.log(startFromYear);
//         startFromYear += 1;
//     }
//
//     return startFromYear;
// }
//
// //console.log(years2());

function negativeNumbers(x) {
    var count = x;
    while (count < 100) {
        count += 1;
        console.log(count);
    }
    return count;
}

//console.log(negativeNumbers(-23))




var fullTable = 1; //Полная таблица умножения
for (var n = 0; n < 9; n++) {
  var result = 0;
  var count = 1;
  for (var i = 0; i < 9; i++) {
    result = count * fullTable;
    //console.log(fullTable + "x" + count + "=" + result);
    count++;
  }
  fullTable++;
  //console.log(" ");
}

var table = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9 }; //Полная таблица умножения через объект
for (var z in table) {
  var result = 0;
  var count = 1;
  //console.log(" ");
  for (i = 0; i < 10; i++) {
    result = count * table[z];
    //console.log (table[z]+'x'+count+'='+result);
    count++;
  }
}

var table2 = { a: 1, b: 2, c: 3, d: 0.1, e: 5, f: 6, g: 7, h: 8, i: 0.5 }; //


var max_table2 = 0; //нахождение максимального числа
for (var x in table2) {
  if (max_table2 < table2[x]) {
    max_table2 = table2[x];
  }
} //console.log(max_table2);

var min_table2 = table2["a"]; //нахождение минимального числа
for (var y in table2) {
  if (min_table2 > table2[y]) {
    min_table2 = table2[y];
  }
} //console.log(min_table2);


function five(some) {
  let a = 0;
  let b = 1;
  let c = 0;
  some = prompt("Please input number")
  for (i = 0; i < some; i++ ){
      c = a + b;
      a = c;
      b++; console.log(c)
  }return c;

}//сложение до 100

function fibonacci(number) {
    let a = 1;
    let b = 1;
    let c = 0;
    for(i = 0; i < number; i++){
        c = a + b;
        a = b;
        b = c;
        console.log(b);
    }return b;

}//console.log(fibonacci(7))


const square = (n) =>{
    return n * n;
};

const surfaceAreaCalculator = (radius) =>{
    return 4 * 3.14 * (square(radius));
};

const surfaceOfMars = surfaceAreaCalculator(3390);
//console.log(surfaceOfMars)



function fib(num) {
    let a = 1;
    let b = 1;
    let c = 0;
    for (i = 0; i < num; i++){
        c = a + b;
        a = b;
        b = c;
        //console.log(b);
    } return b;

}//console.log(fib(11));

function pow(x, n ) {
    if( n!==1 ){
     return x * pow(x, n-1);
    }else {
        return x
    }
}

console.log("Line.№ 298 \n :"+ pow(2, 3) +"\n"+
"---------------------------------------------")
