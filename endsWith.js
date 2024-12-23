function endsWith(str){
  return str[str.length - 1] === "!";
}

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
console.log(endsWith(str1));
console.log(endsWith(str2));

console.log(str1.endsWith('!'));
console.log(str2.endsWith("!"));