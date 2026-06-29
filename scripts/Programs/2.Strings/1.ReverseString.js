
const str = "hello";
const reverseString = str.split("").reverse().join("");
console.log(reverseString);

/*
Whats happening here

"hello".split("")    // step 1 — split into array  → ["h","e","l","l","o"]
       .reverse()    // step 2 — reverse the array → ["o","l","l","e","h"]
       .join("")     // step 3 — join back to string → "olleh"


*/


/* How joins works ?

const words = ["My", "name", "is", "Karthik"];

words.join(" ")   // "My name is Karthik"  ← sentence
words.join("-")   // "My-name-is-Karthik"  ← slug format
words.join("")    // "MynameisKarthik"      ← no separator

*/