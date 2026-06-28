
// ---- Solution 1 — Using built-in reverse() (simplest): ----
const numbers = [1, 2, 3, 4, 5];
const reversed = [...numbers].reverse();
console.log(reversed); // [5, 4, 3, 2, 1]
console.log(numbers);  // [1, 2, 3, 4, 5] ← original unchanged



// ---- Solution 3 — Using for loop (basic logic): ----

const nums = [1,2,3,5,4];
let reverse = [];
for(let i=nums.length-1; i>=0; i--){
    reverse.push(nums[i]);
}
console.log("Reverse array using forloop ",reverse);



// ---- Solution 2 — Using reduce (shows strong logic): ---- 

/* NOTE : Think of it like this — reduce gives back whatever the accumulator ends up as. 
If you start with 0 it gives a number. If you start with [] it gives an array! */

const numArray = [1, 2, 3, 4, 5];
const reverseArray = numArray.reduce((acc , num)=>{
    return [num,...acc]   //... spread unpacks the array — takes items out and places them individually.
},[])
console.log("Reverse Array using reduce : ",reverseArray);

/*
Explanation : 

Start:    acc = []

Step 1:   num=1,  [num, ...acc] = [1, ...[]]   = [1]
Step 2:   num=2,  [num, ...acc] = [2, ...[1]]  = [2, 1]
Step 3:   num=3,  [num, ...acc] = [3, ...[2,1]]= [3, 2, 1]

Result:  [3, 2, 1]  ← reversed!

Simple way to remember:

[...acc, num] → num goes to end (normal order)

[num, ...acc] → num goes to front (reverse order)

*/