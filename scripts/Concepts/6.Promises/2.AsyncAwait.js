// Async and await is a syntax built on top of promises.

// So instead of using .then() , .catch() , we can use async function and await.


function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(' Data has been fetched...')
        },3000)
    })
}

// Now here instead of using .then() which used in previous concept , we can directly use another async fun

async function fetchData(){
        try{
            console.log(await getData()) // we have to use await here as promise need to resolve(its in pending state at the start)
        }catch(error){
            console.log(await getData())
        }
}

fetchData();