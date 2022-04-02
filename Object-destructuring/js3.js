// let obj = {
// 	month: 12,
// 	day:   31,
// };

// let {year = 2025, month, day} = obj;

// console.log(year);  // выведет 2025
// console.log(month); // выведет 1
// console.log(day);   // выведет 31

let options = {
	width:  400,
	height: 500,
};

let {color = 'red', width, height} = options;

console.log(color);
console.log(width);
console.log(height);