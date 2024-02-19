 // main.js
// Correct order of imports
import { add, sub, mul } from "./math";
import defaultExport from "./math";

console.log(add(2, 3));
console.log(sub(10, 20));
console.log(mul(4, 4));
console.log(defaultExport);
