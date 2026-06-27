/* A callback in JavaScript is a function that is passed as an argument to another function 
and is executed later or after some operation has been finished */

// Js is syncronous and we make it async and wherever we need to wait , then we go for callback etc..

// ---- CallBack method ------

function fetchData(callback){
    setTimeout(()=>{
        let data="Fetched.."
        callback(data,null);
    },5000)
}

function handleData(data , error){
    if(error){
        console.log(error);
    }else
        console.log(data);
}

console.log(fetchData(handleData));



// ---- -  ------ IMPORTANT ------ --------

/*
What you had (good, but surface level):

"A callback is a function passed to another function and executed later"

What they want to hear (the deeper explanation):
JS is single-threaded — it has only one call stack, meaning it can only do one thing at a time. 
So when it hits setTimeout, it can't just "wait" — that would freeze the entire page. Instead,
 it hands the timer to the Web API (the browser handles it separately), and JS keeps moving.
When the timer finishes, the browser puts your callback into the Callback Queue. 
The Event Loop is always watching — the moment the call stack is empty, 
it picks the first item from the queue and pushes it onto the stack to run.
That's why console.log(fetchData(handleData)) prints undefined first — fetchData has no return value, 
and the async part hasn't run yet.


 */