
// ------ Solution 1 — Using Math.max and Math.min (simplest) ------

const numbers = [3, 1, 8, 2, 9, 4];
const largeNum = Math.max(...numbers);
const smallNum = Math.min(...numbers);
console.log(largeNum);
console.log(smallNum);

/*  ---- NOTE ----

Math.max() expects individual values — Math.max(3, 1, 8, 2, 9, 4)
But we have an array — so ... spread operator unpacks it
...numbers converts [3,1,8,2,9,4] → 3, 1, 8, 2, 9, 4

*/



// ---- Solution 2 — Using sort (good to know): ---- 
const nums = [3, 1, 8, 2, 9, 4];  // sort modifies original array , unlike other array functions.
nums.sort((a,b)=>a-b);
console.log("smallest number ",nums[0]);
console.log("Largest number ",nums[nums.length-1]);


// ---- Solution 3 — Using reduce (shows strong JS knowledge): ---- 
const numArray = [3, 1, 8, 2, 9, 4];

const largest = numArray.reduce((max,num)=>{
    return num>max ? num:max;
},0);  // 0 is initialisatoin to max variable.

const smallest = numArray.reduce((min,num)=>{
    return num<min ? num:min;
},Infinity) // inifnity is maximum number

console.log("largest :", largest);  // 9
console.log("smallest:", smallest); // 1