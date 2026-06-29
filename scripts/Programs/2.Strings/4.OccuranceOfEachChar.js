//"Count occurrence of ALL characters in a string"

//This logic is simple. Take one object and store key as char and value as its count;
const str = "hello world";
const charCount = {};

for(let char of str){
    charCount[char] = (charCount[char]||0)+1;  // here charCount[char] is we are storing value to object key;
}
console.log(charCount);


/*
// JAVASCRIPT — [] works for both!
const arr = [1, 2, 3];
arr[0] = 10;              // ← array access

const obj = {};
obj["name"] = "Raj";      // ← object access with []
obj.name = "Raj";         // ← same thing with dot notation!
*/


/*
// Java
charCount.getOrDefault(char, 0) + 1

// JavaScript — same logic, different syntax
(charCount[char] || 0) + 1
*/

