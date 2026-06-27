/*
In js functions are called as first class citizens. Unlike java , in js we can assign the functions
into the variable , pass it as a argumnt to another functions etc..

Higher Order Fun is a regular function that can take one or more functions as an argument Or return a 
 function as its result.
*/

// --- will start wit basic function ---

function add(a,b){
    return a+b;
}
console.log(add);  // we can also log the entire function in js
console.log(add(2,3)); // logging the result of the function



// --- Assigning funtion to variable ---

let sum = function (a,b){
    return a+b;
}
console.log(sum(3,6));


// --- Passing function as a arg to another function ---

let addition = function (a,b){
    return a+b;
}

let substract = function (a,b){
    return a-b;
}

function operation(funName, a, b){
    return funName(a,b);
}
console.log(addition(1,1));
console.log(substract(1,1));


/*
Note : There are several types of functions like

   1. Higher order function
   2. Arrow function
   3. Named function
   4. Anonymous function
   5. Async function
      etc...
*/

// Remember about closure :  Outer functoin returns inner function , its called as closure.