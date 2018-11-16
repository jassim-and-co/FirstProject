
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


//export default findCombinationFor