//"Count occurrence of ALL characters in a string"


//Solution 1 (reduce with map, preffered one)
const str = "hello world";
let charMaps = [...str].reduce((acc,ch)=>{
     acc[ch] = (acc[ch]||0)+1;
     return acc;
},new Map());
for(let [ch,count] of charMaps){
    if(count>1)
        console.log(`character '${ch}' repeated '${count}' times`);
}



//Solution 2: 
const str1 = "hello world";
let charMap = new Map();
for(let char of str1){
    charMap.set(char, (charMap.get(char)|0) +1);
}

for(let [char,count] of charMap){
if(count>1)
    console.log(`character '${char}' repeated '${count}' times`);
}
// console.log(charCount1); // To print all



//Solution 3 (reduce with object)
const str2 = "hello world";
const charCount = [...str2].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {});
console.log("Occurence in object",charCount)





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




