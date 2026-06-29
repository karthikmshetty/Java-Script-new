const str = "hello world";

const charMap = [...str].reduce((acc,ch)=>{
    acc[ch] = (acc[ch]||0)+1;
},new Map());
console.log(charMap);