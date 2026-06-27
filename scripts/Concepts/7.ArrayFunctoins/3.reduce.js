// reduce = combine all items into one single value.
/* loops through every item in an array, accumulates them into a single value,
 and returns that one value (not an array) */

let nums = [1,2,3,4,5];
let sum = nums.reduce((accumulator,num)=> accumulator+num,0) // Initial val of accumltr is zero
console.log(sum)

 // ------ note --------
 /*
 The 0 at the end is the starting value of the accumulator.
 Like when we perform sum , we initialise the variable with zero in java. So same thing does here.
 Dont confuse that it starts from 0 index of array
 */

