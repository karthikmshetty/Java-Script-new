// Reference Type / Non-Primitive Type

// Reference Types : Object , Array , Function 

//    ----- Object -----
   /* When we want to group the elements , we go for objects.
      For exg : we need student data which has age , name etc...
   */


      let student = {
        name : "Karthik",
        age : 27,
        marks : 92.3
      }

      console.log(student);  // To print entire object
      console.log(typeof(student)); 
      console.log(student.name);  // To print specific value using key



// ----- Now will see whats the difference between Value Type and Reference Type. ----

// 1. In Value Types it only copies the values and not the entire variable instance
let x = "educosys";
y = x;
x = "ABC";
console.log(x);
console.log(y);

// 2. In Reference Types it copies with entire instance , not only value

let p = {name:"karthik"};
let q=p;
p.name="Shetty"
console.log(p);
console.log(q);


//    ----- Arrays -----
 let arr = ["abc", "efg", 6 , null]; // Interesting thing is we can add any value type in array
 console.log(arr);  // print entire array
 console.log(arr[0]); // print by index
 console.log(arr[2]);

 console.log(typeof(arr)); // Remeber : Array and fun is also object. So type is object



 // ---- Functions ----
   // To perform the same task again and again we use functions

   function courses(coursename){
      console.log(coursename);
   }
   courses("learn JS");