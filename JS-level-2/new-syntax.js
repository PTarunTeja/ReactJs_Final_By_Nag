

//-------------------------------------------
// obj-literal enhancements
//-------------------------------------------
// var name = "Nag";
// var age = 34;
// var dynamicAddressType = "office"; // office | vacation
// //ES5
// var person1 = {
//     name: name,
//     age: age,
//     sayName: function () {
//         ///
//     },
//     'home-address': 'chennai'
// };
// //ES6
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

let nums = [1, 2, 3, 4, 5, [6, 7]];

// let n1 = nums[0];
// let n2 = nums[1];

// or

let [n1, n2, n3 = 30, , n5, [n6, n7]] = nums;

