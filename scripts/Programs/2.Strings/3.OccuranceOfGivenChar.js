// 1. Occurance of given character

const str = "hello world";
const char = 'l'; // find the character 'L' occurance
const count = str.split("").filter(ch=> ch===char).length; 
console.log("Occurance of char : ",count);
//Just info : we can split by space as well using regex: str.split(/\s+/)

