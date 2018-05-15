"use strict"

//----------------------------------------------------

// how to create function in .js-language ?

/*
// 1. function declaration
        => Named function
        => function-obj created at scope-creation phase
        => always get hoist with function-obj
// 2. function expression
        => anonymous function
        => function-obj created at scope-execution phase
        => we can invoke function-expression
*/

//----------------------------------------------------

// 1. function declaration

// console.log(add(12, 13))

// function add(n1, n2) {
//     return n1 + n2;
// }
// console.log(add(12, 13))

//----------------------------------------------------

// 2. function expression

// console.log(add(12, 13)) // error
// var add = function (n1, n2) {
//     return n1 + n2;
// }
// console.log(add(12, 13))

//----------------------------------------------------

// e.g

// let userType = "";  // admin || member
// let userAction;
// function login() {
//     userType = "admin"
// }
// login();
// if (userType === "admin") {
//     userAction = function () {
//         console.log('admin-user action..');
//     }
// } else {
//     userAction = function () {
//         console.log('member-user action');
//     }
// }
// userAction();

//----------------------------------------------------
/*
    Functions as Values
        - STORE functions in variables
        - PASS functions in parameters
        - RETURN functions from other functions
*/

//----------------------------------------------------

// - STORE functions in variables

// function greet() {
//     console.log('Hello...');
// }
// let sayHello = greet;
// sayHello();

//----------------------------------------------------

// - PASS functions in parameters

// function greet(f) {
//     if (f) { f(); return }
//     console.log('hello...');
// }
// greet();
// let kaGreet = function () {
//     console.log('Namaskara..');
// }
// greet(kaGreet);

// e.g

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// // nums.sort();
// nums.sort(function (a, b) { return a - b; });
// console.log(nums);

//----------------------------------------------------

// - RETURN functions from other functions

// function doTeach() {
//     console.log('teaching .js');
//     let doLearn = function () {
//         console.log('learning .js');
//     }
//     // doLearn();
//     return doLearn;
// }

// let learnFunc = doTeach();
// learnFunc();
// learnFunc();


//----------------------------------------------------
// Function with params
//----------------------------------------------------


// function func(a, b) {
//     console.log(arguments);
//     console.log(a);
//     console.log(b);
// }
// func(10, 20, 30, 40);


// e.g

// function sum() {
//     let len = arguments.length,
//         i = 0,
//         result = 0;
//     while (i < len) {
//         result += arguments[i];
//         i++;
//     }
//     return result;
// }


// can we overload function? No

// function getFood() {
//     return "No Food";
// }

// function getFood(pay) {
//     if (arguments.length === 0) return "No Food"
//     return "Biryani";
// }
// console.log(getFood());


//----------------------------------------------------

// ES6 : function with default-params

// function func(a = 1, b = 2) {

//     // if (!a) a = 1;
//     // if (!b) b = 2;

//     // a = a || 1;
//     // b = b || 2;

//     console.log(a)
//     console.log(b)
// }
// func(undefined, 20)

//----------------------------------------------------

// ES6 : function with rest-param

// function func(a, b, ...rest) {
//     console.log(a);
//     console.log(b);
//     console.log(Array.isArray(rest));
//     console.log(rest)

// }
// func(1, 2, 3, 4, 5, 6, 7, 8, 9);

//----------------------------------------------------

//----------------------------------------------------
// closures

/*
    A closure is a function having access to the parent scope,
    even after the parent function has closed.
*/
//----------------------------------------------------


// function teach(sub) {
//     console.log('teaching ' + sub);
//     let notes = sub + "-notes";
//     let fun = "bla bla bla";
//     function learn() {
//         console.log('learning with ' + notes);
//     }
//     console.log('teaching end..');
//     return learn;
// }


// let learnFunc = teach('.js') // teach-scope with args & local
// learnFunc();


//----------------------------------------------------

// why / where we need closures ?

/*

    => to abstract public-behav of module
    => while executing func async, to access parent-scoped data

*/
//----------------------------------------------------

// => to abstract public-behav of module

/*

    e.g counter-module

        - count
        - doCount()
        - getCount()

*/

// const counter = (function () {
//     let count = 0;  // private
//     // public
//     function doCount() {
//         count++;
//     }
//     function getCount() {
//         return count;
//     }
//     return {
//         inc: doCount,
//         get: getCount
//     };
// })();


//----------------------------------------------------
// function-binding 
//----------------------------------------------------
/*
    1. static function-binding
    2. dynamic function-binding
*/


//----------------------------------------------------
// 1. static function-binding

// function sayNameForAll() {
//     console.dir(this);
//     console.log('im ' + this.name);
// }
// sayNameForAll();

// let p1 = {
//     name: 'Nag',
//     sayName: sayNameForAll
// }
// let p2 = {
//     name: 'ria',
//     sayName: sayNameForAll
// }
// p1.sayName(); // im Nag
// p2.sayName(); // im ria
//----------------------------------------------------

// b. dynamic function-binding
let p = { name: 'Nag' }
let e = { name: 'ibm' }

let greetLib = {
    sayName: function (message, from) {
        console.log(message + ' im ' + this.name + " : " + from);
    }
};
greetLib.sayName("dude", "universe");

// // way-1:
// greetLib.sayName.call(p, "hello", "chennai");
// greetLib.sayName.call(e, "hey", "bengalore")

// way-2:
// greetLib.sayName.apply(p, ["hello", "chennai"]);
// greetLib.sayName.apply(e, ["hey", "bengalore"])

// way-3:
// let personSayName = greetLib.sayName.bind(p, "hello", "chennai");
// personSayName();
// personSayName();
// let employeeSayName = greetLib.sayName.bind(e);
// employeeSayName('hey', 'pune');
// employeeSayName('dude', 'blr');

//--------------------------------------------------

/*

    in .js-lang , we can invoke functions in 3 ways

    1. function-invocation
        'this' ==> undefined ( in strict-mode ) ||  window ( in non-strict-mode )
    2. method-invocation ( static-function-binding) 
        'this' ==> invoker object
    3. call/apply/bind invocation ( dynamic-function-binding)
        'this' => arg-object

*/

//--------------------------------------------------

// Quiz

// let pName = "global";
// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         // let pName = "local";
//         console.log('im ' + pName); // scope hierarchy'd data
//         console.log('im ' + person.pName); // obj's data
//         console.log('im ' + this.pName); // scope's owner data
//     }
// };
// // person.sayName(); 
// let oldPerson = person;
// person = { pName: 'Ria', sayName: function () { console.log('im..') } }

// oldPerson.sayName();

//--------------------------------------------------
// Quiz

let trainer = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js")
        let self=this;
        let doLearn = function () {
            console.log(this.name + " learning .js from " + self.name);
        }
        console.log('teaching end...');
        return doLearn;
    }
};

let stud = { name: 'sandeep' }

// // this-week
let doLearn = trainer.doTeach();
// doLearn(); // Error
doLearn.call(stud);

// // next-week
let newTnr = { name: 'Praveen' }
doLearn = trainer.doTeach.call(newTnr);
doLearn.call(stud);

//--------------------------------------------------


function someFunction() {
    console.log(this);
}
someFunction();  // function invocation

// static-function-binding
let o1 = { name: 'A', someFunction: someFunction }
o1.someFunction(); // method invocation

// dynamic-function-binding
let o2 = { name: 'B' }
someFunction.call(o2);  // call/apply/bind invocation

//--------------------------------------------------

// let o1 = {
//     name: 'A',
//     doSomething: function () {
//         console.log(this);
//         let newClosure = function () {
//             console.log(this);
//         }
//         let o2 = { name: 'B' }
//         newClosure.call(o2);
//     }
// }
// o1.doSomething();

//--------------------------------------------------