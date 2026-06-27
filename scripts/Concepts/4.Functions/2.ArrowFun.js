// Arrow functions , here we No need to write name of the function

let sum = (a,b)=>{
    return a+b;
}
console.log(sum(2,2));


// We can also remove the braces if there is only one statement

let sub = (a,b)=>a-b;
console.log(sub(3,2));


/* ----- Rules of arrow functions -----

// Zero parameters → () required
() => console.log("hello")

// One parameter → () optional (both work!)
result => console.log(result)      // ✅ works
(result) => console.log(result)    // ✅ also works

// Two+ parameters → () required
(a, b) => console.log(a, b)

*/