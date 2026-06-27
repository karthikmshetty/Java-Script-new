/*
JavaScript is the language. TypeScript is JavaScript with one superpower added — types. Which gives type safety 
The main difference is TypeScript adds static typing, 
so errors are caught at compile time before the code runs, not at runtime.
It makes large codebases easier to maintain.
*/


// JavaScript — no rules on what you pass
function add(a, b) {
    return a + b;
}

add(5, 10);       // ✅ 15
add("5", 10);     // ✅ "510"  ← JS allows this, no warning!
add("hello", 10); // ✅ "hello10" ← JS still allows, no error


// TypeScript — you define what type is allowed
function adds(a: number, b: number): number {
    return a + b;
}

adds(5, 10);       // ✅ 15
adds("5", 10);     // ❌ Error caught BEFORE running!




