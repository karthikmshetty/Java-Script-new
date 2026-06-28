
const numbers = [1, 2, 3, 2, 4, 1, 5];

const uniqNum = numbers.filter((num,index)=>{
    return numbers.indexOf(num)===index;
})

console.log(uniqNum);