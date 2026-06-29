
// Solution 1 - Flatten a nested array using reduce

const arr = [1, [2, 3], [4, 5], 6];
const flattened = arr.reduce((acc,item)=>{
       return Array.isArray(item) ? [...acc, ...item] : [...acc, item];
},[])
console.log(flattened);

/*
What if an item is a number, not an array? ...6 will throw an error! So we need a check:
Array.isArray(item) — checks if item is an array or not:
*/




//Solution 2 — Using toString and split (clever trick):


const arry = [1, [2, 3], [4, 5], 6];

const flattenedArray = arry.toString().split(',').map(Number);

console.log("Using toString and split: ",flattenedArray); // [1, 2, 3, 4, 5, 6]

/*
arr.toString()           // "1,2,3,4,5,6"  ← becomes a string
.split(',')              // ["1","2","3","4","5","6"] ← split by comma
.map(Number)             // [1, 2, 3, 4, 5, 6] ← convert back to numbers
*/