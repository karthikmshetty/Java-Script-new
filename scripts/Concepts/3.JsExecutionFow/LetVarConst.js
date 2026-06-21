// const , let , var


// --- let ---
// If we want to change the value of the variable , then use let
let b = "karthik";
  console.log(b);
  b = 2;
  console.log(b); //now variable b's value is integer 2. 


  // ---- const -----
  // If we want the value of the variable which should not be changed , then we use const.
  const a = "karthik";
  console.log(a);
//   a = 2;
  //console.log(a); // here it will throw an error as we cant re-assign the value to same variable.


  // ---- var ----
 // Using var is not preferred. Var is used when we want to change varible value as well as re declare the variable name.



 /* NOTE : const and let are block scope. block is nothing but inside the {}. (eg : if , for etc..)
           But var is function scope.
*/
// eg :
{
    const c = 10;
    let d = 20;
    console.log(c);
}
console.log(c); // we will be getting 'c' is not defined.