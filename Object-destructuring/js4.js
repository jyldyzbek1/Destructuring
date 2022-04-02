// let obj = {
// 	month: 12,
// 	day:   31,
// };

// let {year:y = 2025, month, day} = obj;

// console.log(y);     // выведет 2025
// console.log(month); // выведет 1
// console.log(day);   // выведет 31

let options = {
	width:  400,
	height: 500,
};

let {color:c = 'red', width, height} = options;

console.log(c);
console.log(width);
console.log(height);