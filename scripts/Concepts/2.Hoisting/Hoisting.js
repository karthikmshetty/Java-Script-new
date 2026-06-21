/* Hoisting in JavaScript is the behavior where declarations are conceptually moved to the 
     top of their scope during the compilation phase, before the code executes.
   This means you can sometimes use variables or functions before they appear in the source code. */


//Function declarations are fully hoisted:
sayHello(); // Works
function sayHello() {
  console.log("Hello!");
}

//JavaScript treats it roughly like:
function sayHello() {
  console.log("Hello!");
}
sayHello();