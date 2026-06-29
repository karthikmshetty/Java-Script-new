// Solution 1 : Display seperatly
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = numbers.filter((num) =>{
    return num%2==0;
})

const odd = numbers.filter((num)=>{
    return num%2!==0;
})

console.log("Even Numbers",even);
console.log("Odd Numbers",odd);



// Solution 2 : Using object , if we want in optimised way
const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = {
  evens: numbersArr.filter(num => num % 2 === 0),
  odds:  numbersArr.filter(num => num % 2 !== 0)
};

console.log(result.evens); // [2, 4, 6, 8, 10]
console.log(result.odds);  // [1, 3, 5, 7, 9]