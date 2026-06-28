//indexOf(num) — always returns the first position of the given number from the array.

const numbers = [1,2,3,4,2,1,5];

const duplicateNum = numbers.filter((num,index)=>{
    return numbers.indexOf(num)!==index;
})
console.log(duplicateNum);

