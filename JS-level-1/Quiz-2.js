
// understanding closures

// problem : a function pushed into an array in for-loop,
// shoud display respective index

var myFunctions = [];

//---------------------------------------

// soln-code

// function getF(i) {
//     var f = function () {
//         console.log(j);
//     }
//     return f;
// }

for (var i = 0; i < 2; i++) {
    var f = function () {
        console.log(i);
    }
    myFunctions.push(f);
    // myFunctions.push(getF(i));
}

//---------------------------------------

myFunctions[0](); // 0
myFunctions[1](); // 1