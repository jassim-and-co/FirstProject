
var result =1;
var counter =0;
while (counter<=10){
    result = result * 2;
    counter+=1;
}
console.log(result);
//
// var result = 1;
// for(var counter = 0; counter < 10; counter +=1)
//     result*=2;
// console.log(result);



// var counter = 1;
// var print = "#";
// while (counter < 8){
//     console.log(print);
//     print +="#";
//     counter = counter+=1;
// };


// for (var n = 1; n <= 100; n++) {
//     var output = "";
//     if (n % 3 == 0)
//         output += "Fizz";
//     if (n % 5 == 0)
//         output += "Buzz";
//     console.log(output || n);
// };

var size = 16;

var board = " ";

for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
};

//console.log(board);

// var result = 7;
// while (result < 98){
//     console.log(result+=7);
// }

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


function printNumbers() {
    count = 4;
    for(i=0; i<400; i++){
    console.log(count)
        count++
    };

    return count
}
// console.log(printNumbers());


function printNumbers2() {
    count = 4;
    for(i=0; i<3; i++){
        console.log(count)
        count = count+3;
        };
    return count
}
// console.log(printNumbers2());



function toless() {
    count = 654;
for (i=654; i>0; i--){
    console.log(count);
    count = count - 1;
    }return count;
    }
    // console.log(toless());

function years() {
    var startFromYear = 1983;
    for (i = 0; i < 34; i++) {
        console.log(startFromYear);
        startFromYear += 1;
    }return startFromYear;
}
//console.log(years())

function years2() {
    var startFromYear = 1983;
    while(startFromYear < 2018){
        console.log(startFromYear);
        startFromYear += 1;
    };return startFromYear;
}
//console.log(years2());


    function negativeNumbers(x) {
        var count = x;
        while (count < 100)
        { count+=1;
            console.log(count);
        }return count;
    };
//console.log(negativeNumbers(-23))



function makeTable() {
    var tillTen = 1;
    while (tillTen <= 10) {
        function multiply(x) {
            var increment = 1;
            while (increment <= 10) {
                var result = x * increment;
                console.log(increment + "x" +x+ '=' + result);
                increment++;
            }
        }tillTen++;
    }
}
// console.log(makeTable());

function multiply(x) {
    var increment = 1;
    while (increment <= 10) {
        var result = x * increment;
        console.log(increment + "x" +x+ '=' + result);
        increment++;
    }
}
// console.log(multiply(2));


function sum() {
    var x=0;
    var increment = 1;
for (let i = 100; i > 0; i--){
    x = x + increment;
    increment++;
    console.log(x);
}return "";
}
//console.log(sum());


function sum() {
    var x=1;
    var increment = 1;
    for (let i = 10; i > 1; i--){
        x = x * increment;
        increment++;
        console.log(x);
    }return "";
}
//console.log(sum());




     var table = {
         a: 1, b: 2, c: 3, d: 4,
         e: 5, f: 6, g: 7, h: 8,
         i: 9
     };
     for( var x in table){
           var result = 0;
            var count = 1;
             for ( let i = 0; i < 10; i++){
                 result = count * table[x];
                    // console.log (table[x]+'x'+count+'='+result);
                        count++;
             };
     };

     var fullTable = 1;
       for (let n = 0; n < 10; n++){
         var result = 0;
             var count = 1;
                for (var i = 0; i < 10; i++){
                 result = count * fullTable;
                    console.log(fullTable+'x'+count+'='+result);
                        count++;
                };
                    fullTable++;
                    console.log(" ")
                        for (var set in table){
                        table[set] = result;
                        }
                         console.log(table);
                          console.log(" ")
       };
