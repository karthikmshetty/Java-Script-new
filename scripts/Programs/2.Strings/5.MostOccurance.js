//1. Very Important , when it comes to print max counts with key value pair

const str = "helloo world";
const charMaps = [...str].reduce((acc, ch) => {
    return acc.set(ch, (acc.get(ch) || 0) + 1);
}, new Map());

const maxCount = Math.max(...charMaps.values());

// here each key-value pair converted as array in charMaps.entries()
let mostOccured = [...charMaps.entries()].filter(([ch,count])=> count===maxCount).map(([ch])=>ch);

console.log(`Max occurrence: ${maxCount} times`);
console.log(`Characters: ${mostOccured}`);





// 2. If they ask flights and its prices where prices and flights are in different array like real scenario

const flights = ["IndiGo", "AirIndia", "SpiceJet", "Vistara"];
const prices  = [3200,     2100,       2100,        4500];

// Step 1 — find min price
const minPrice = Math.min(...prices);

// Step 2 — filter and print with price
flights
    .filter((flight, index) => prices[index] === minPrice)
    .forEach(flight => {
        const index = flights.indexOf(flight);
        console.log(`${flight} : ${prices[index]}`);
    });

//const numberPrices = prices.map(Number);  if prices were string , then parse using map()


//3. When we want to print it in key-value pair in descending order.

const flightss = ["IndiGo", "AirIndia", "SpiceJet", "Vistara"];
const pricess  = [3200,      2100,       2100,        4500];

// Step 1 — combine both arrays into one array of objects
const flightData = flightss.map((flight, index) => ({
    name: flight,
    price: pricess[index]
}));

console.log(flightData);
// [ { name:'IndiGo',   price:3200 },
//   { name:'AirIndia', price:2100 },
//   { name:'SpiceJet', price:2100 },
//   { name:'Vistara',  price:4500 } ]

// Step 2 — sort ascending LOW to HIGH
const sortedObject = flightData.sort((a, b) => a.price - b.price);

// Step 3 — print
sortedObject.forEach(f => console.log(`${f.name} : ₹${f.price}`));

// AirIndia : ₹2100
// SpiceJet : ₹2100
// IndiGo   : ₹3200
// Vistara  : ₹4500