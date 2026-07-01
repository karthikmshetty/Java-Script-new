// Very Important , when it comes to print max counts with key value pair

const str = "helloo world";
const charMaps = [...str].reduce((acc, ch) => {
    return acc.set(ch, (acc.get(ch) || 0) + 1);
}, new Map());

const maxCount = Math.max(...charMaps.values());

// here each key-value pair converted as array in charMaps.entries()
let mostOccured = [...charMaps.entries()].filter(([ch,count])=> count===maxCount).map(([ch])=>ch);

console.log(`Max occurrence: ${maxCount} times`);
console.log(`Characters: ${mostOccured}`);







//  If they ask flights and its prices where prices and flights are in different array like real scenario


//const numberPrices = prices.map(Number);  if prices were string , then parse using map()
