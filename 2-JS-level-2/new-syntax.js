"use strict"

//-------------------------------------------
// obj-literal enhancements
//-------------------------------------------
// var name = "Nag";
// var age = 34;
// var dynamicAddressType = "home"; // office | vacation
// // //ES5
// var person1 = {
//     name: name,
//     age: age,
//     sayName: function () {
//         ///
//     },
//     'home-address': 'chennai'
// };
// // //ES6
// var person2 = {
//     name,
//     age,
//     sayName() {
//         //..
//     },
//     [dynamicAddressType + '-address']: 'chennai',
//     [1 + 2 + 2]: 'five',
//     'say Name'() {
//         console.log('say Name()');
//     }
// };
// person2['say Name']()
//-------------------------------------------




//-------------------------------------------
// de-structuring
//-------------------------------------------


// A. array

// let nums = [1, 2, 3, 4, 5, [6, 7]];

// // let n1 = nums[0];
// // let n2 = nums[1];

// // or

// let [n1, n2, n3 = 30, , n5, [n6, n7]] = nums;

// B. Object

// let person = {
//     name: 'nag',
//     age: 33
// }

// let myName = person.name;
// let myAge = person.age;

// or

// let { name: myName, age: myAge } = person;
// 
// or
// let { name, age } = person;

//------------------------------------------------


//-------------------------------------------
// spread-operator
//-------------------------------------------

// function func(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// let nums = [10, 20, 30];
// // func(nums[0], nums[1], nums[2]); // manually spread
// // or
// func(...nums);


// // e.g

// let arr1 = [1, 2, 3];
// let arr2 = [7, 8, 9];

// let arr3 = [...arr1, 4, 5, 6, ...arr2];

//------------------------------------------------

// let getPrice = function () {
//     return 100 + 200;
// }

// Arrow-function

// syntax :


// let getPrice = () => {
//     return 100 + 200;
// }

// // 
// let getPrice = (count) => {
//     return count * (100 + 200);
// }

// or

// let getPrice = count => {
//     return count * (100 + 200);
// }


// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax;
// }

// or

// let getPrice = (count, tax) => count * (100 + 200) + tax;


// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200);
//     let total = cost + tax; return total;
// }


/*
    why/where we need arrow-function ?

    // => to make compact function-arg
    // => to capture 'this'


*/

// => to make compact function-arg

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// // nums.sort(function (a, b) { return a - b });
// // or
// nums.sort((a, b) => a - b);

// => to capture 'this'

// let trainer = {
//     name: 'Nag',
//     doTeach() {
//         console.log(this.name + " teaching .js");
//         // let askQues = function (q) {
//         //     console.log(this.name + " answering " + q);
//         // }
//         // or
//         let askQues = (q) => {
//             console.log(this.name + " answering " + q);
//         }
//         console.log('teaching end...');
//         return askQues;
//     }
// };

// let askQues = trainer.doTeach();
// //askQues('Q1'); // error
// // askQues.call(trainer, "Q1")
// // askQues.call(trainer, "Q2")
// askQues("Q1")
// askQues("Q2")


// // let newTnr = { name: 'Praveen' };
// // askQues.call(newTnr, "Q3");
// askQues("Q3")

//----------------------------------------------------------