let array1 = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

console.log([].concat(...array1))
let unNest = array1.reduce((acc, curr) =>{
  return acc.concat(curr);
}, []);

console.log(unNest);

// //using forEach

let unNestedArray = [];
let unNest2 = array1.forEach((val) => {
  unNestedArray = unNestedArray.concat(val);
})
console.log(unNestedArray);

//using concat only
let unNest3 = [].concat(...array1);
console.log(unNest3);

let unNest4 = array1.flat();
console.log(unNest4);