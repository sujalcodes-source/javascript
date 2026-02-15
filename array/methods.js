// Creating Array
let arr = [10, 20, 30, 40, 50];

console.log("Original Array:", arr);

// length
console.log("Length:", arr.length);

// push (add at end)
arr.push(60);

// pop (remove last)
arr.pop();

// unshift (add at beginning)
arr.unshift(5);

// shift (remove first)
arr.shift();

// splice (remove & add)
arr.splice(2, 1, 99); // remove 1 element at index 2 and add 99

// slice (copy part)
let sliced = arr.slice(1, 4);

// indexOf
console.log("IndexOf 40:", arr.indexOf(40));

// lastIndexOf
arr.push(40);
console.log("LastIndexOf 40:", arr.lastIndexOf(40));

// includes
console.log("Includes 30:", arr.includes(30));

// find
let found = arr.find(num => num > 25);
console.log("Find >25:", found);

// findIndex
let foundIndex = arr.findIndex(num => num > 25);
console.log("FindIndex >25:", foundIndex);

// map (create new array)
let mapped = arr.map(num => num * 2);

// filter (condition)
let filtered = arr.filter(num => num > 30);

// reduce (sum)
let sum = arr.reduce((total, num) => total + num, 0);

// sort
let sorted = [...arr].sort((a, b) => a - b);

// reverse
let reversed = [...arr].reverse();

// join
let joined = arr.join("-");

// concat
let newArr = arr.concat([100, 200]);

// every
let allAboveZero = arr.every(num => num > 0);

// some
let someAbove50 = arr.some(num => num > 50);

// flat
let nested = [1, 2, [3, 4]];
let flattened = nested.flat();

// fill
let filled = new Array(5).fill(1);

// Array.from
let fromString = Array.from("HELLO");

// Array.isArray
console.log("Is Array?", Array.isArray(arr));

console.log("Final Array:", arr);
console.log("Sliced:", sliced);
console.log("Mapped:", mapped);
console.log("Filtered:", filtered);
console.log("Sum:", sum);
console.log("Sorted:", sorted);
console.log("Reversed:", reversed);
console.log("Joined:", joined);
console.log("Concat:", newArr);
console.log("Every >0:", allAboveZero);
console.log("Some >50:", someAbove50);
console.log("Flattened:", flattened);
console.log("Filled:", filled);
console.log("From String:", fromString);
