
//------- one more small and important topic about assertion -------------

/* == (loose equality) — checks value only.
   === (strict equality) — checks value AND type.
*/

if(2=="2"){
console.log(true)       // it prints true here as it checks only value
}else{
    console.log(false)

}

if(2==="2"){          // hete it checka the type , So it gives false
console.log(true)
}else{
    console.log(false)

}

