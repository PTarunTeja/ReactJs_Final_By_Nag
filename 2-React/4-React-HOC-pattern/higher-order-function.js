



// function f1() {
//     console.log('log-before');
//     console.log('f1()');
//     console.log('log-after');
// }

// function f2() {
//     console.log('log-before');
//     console.log('f2()');
//     console.log('log-after');
// }

// f1();
// f2();



//----------------------------------------

// Higher-order programming

function f1() {
    console.log('f1()');
}
function f2() {
    console.log('f2()');
}

// HO function
function logWrapper(f) {
    let newF = function () {
        console.log('log-before');
        f();
        console.log('log-after')
    }
    return newF;
}

let f1WithLog = logWrapper(f1);
f1WithLog();

// //-------------------------------------------