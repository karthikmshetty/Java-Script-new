/* filter — loops through every item in an array, keeps only the items that pass a condition, 
and returns a new array. Original array is never touched.
*/

const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter(num => num % 2 === 0);

console.log(evens);    // [2, 4, 6]
console.log(numbers);  // [1, 2, 3, 4, 5, 6]  ← original unchanged