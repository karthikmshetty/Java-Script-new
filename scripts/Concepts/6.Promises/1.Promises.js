/*
A Promise is an object that represents the eventual result of an async operation. 
It has 3 states — pending, fulfilled, and rejected. We use .then() to handle success, 
.catch() for errors, and .finally() for cleanup. 
Promises solve the 'callback hell' problem by letting us chain async steps in a flat, readable way. 
async/await is just cleaner syntax built on top of Promises."
*/


function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(' Data Fetched....'); // if you put reject , in console you find red color with given msg.
        },3000)
    })
}

getData()
   .then(result=>{
         console.log(result);  
   })
   .catch((result)=>{
        console.log(result);  
   })