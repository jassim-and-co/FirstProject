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
console.log("Line.№  \n :"+ fibonacci(9) +"\n"+
"---------------------------------------------")