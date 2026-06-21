// Primitive / Value Types

// There are majorly 5 types.

// --- 1.String --- 
let x = "educos";
console.log(x);
console.log(typeof(x));

// --- 2.Number --- 
let y = 1;
console.log(y);
console.log(typeof(y));


let z = 1.1;   // here decimal also considered as integer nummber itself. In java we call it as float.
console.log(z);
console.log(typeof(z)); 


// --- 3.Boolean --- 
let p = true;
console.log(p);
console.log(typeof(p));

// --- 4. Undefined --- 
let w;
console.log(w);  // undefined is also type 
// we can assign as 'undefined' to any variable. But its not preferred as it should be by default.


// ---  5. Null  --- 
let n = null;
console.log(n);
console.log(typeof(n)+"\n");



// ---- Why JS is dynamic language ----

// Here we can change the type of the variable in run time just by assigning new values

let d = 1;
console.log(d);
console.log(typeof(d));
d = "karthik"  // changing the type
console.log(d);
console.log(typeof(d));