console.log('-index.js-');

let greetMod = require('ibm-may-greet');

greetMod.greet();
greetMod.greet('en');
greetMod.greet('es');

//--------------------------------------

// import { item1, item2  } from './hotel/menu';

// or

import item, { item1 as poha, item2 as pav } from './hotel/menu';

console.log(item);
console.log(poha);
console.log(pav);