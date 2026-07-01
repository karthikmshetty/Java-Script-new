// Remove duplicate and print only 

const str1 = "hello world";
let unique = new Set(str1.replace(/ /g,""));
console.log([...unique].join(""))

/*
 ----- Explanation -----

"hello world"
    ↓ str1.replace(/ /g,"")       // remove ALL spaces globally
"helloworld"
    ↓ new Set()                    // pass to Set — duplicates auto removed
Set { 'h','e','l','o','w','r','d' }
    ↓ [...unique]                  // spread Set back to array
['h','e','l','o','w','r','d']
    ↓ .join("")                    // join array to string with no separator
"helowrd"

*/



// Print only duplicates
const str = "hello world";

const seen = new Set();
const duplicates = new Set();

for (let ch of str) {
    if (ch === ' ') continue;
    if (seen.has(ch)) {
        duplicates.add(ch);  // already seen → it's a duplicate
    } else {
        seen.add(ch);        // first time → just remember it
    }
}

console.log([...duplicates]);
// ['l', 'o']