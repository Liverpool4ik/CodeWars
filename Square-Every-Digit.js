//// Square Every Digit
// // 🎹Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

// ⚽ Solution
function squareDigits(num) {
	let strNum = String(num);
	let result = "";
	for (let i = 0; i < strNum.length; i++) {
		let squared = parseInt(strNum[i] * parseInt(strNum[i]));
		result = result + String(squared);
	}
	return parseInt(result);
}
// 1)================================== -->
function squareDigits(num) {
	return Number(
		("" + num)
			.split("")
			.map(function (val) {
				return val * val;
			})
			.join("")
	);
}

// 2) ==================================   ---->
function squareDigits(num) {
	return +num
		.toString()
		.split("")
		.map((i) => i * i)
		.join("");
}
// 3)==================================  ---->
function squareDigits(num) {
	let string = num.toString();
	let results = [];
	for (var i = 0; i < string.length; i++) {
		results[i] = string[i] * string[i];
	}
	return Number(results.join(""));
}
// 4)==================================  ---->
function squareDigits(num) {
	let result = num
		.toString()
		.split("")
		.map((num) => parseInt(num))
		.map((num) => num * num)
		.join("");

	return parseInt(result);
}
// 5)==================================  ---->

// 6)==================================  ---->

// 7)==================================  ---->

//8)==================================  ---->

//9)==================================  ---->

//10)==================================  ---->
