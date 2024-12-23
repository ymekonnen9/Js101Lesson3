let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
let keys = Object.keys(ages);
console.log(keys.includes("Spot"));

console.log("Or to make sure the property is the objects own but not inherited we can use Object.prototype.hasOwnProperty()")

console.log(ages.hasOwnProperty("Spot"));