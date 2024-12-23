let numbers = [1, 2, 3, 4, 5];

//reversing without mutating the original array


let reversed = [...numbers].reverse();
console.log(reversed);

//using sort

let reversed2 = [];

numbers.forEach((num, i) => reversed2[numbers.length - 1 - i] = num);

console.log(reversed2);
console.log(numbers);