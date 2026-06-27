// map = transform every item in an array and get a new array back.

const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);

console.log(doubled);  // [2, 4, 6, 8]
console.log(numbers);  // [1, 2, 3, 4]  ← original unchanged