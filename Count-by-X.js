//// TCount by X

// // // 🎹
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater
// Return the results as an array or list ( depending on language ).

// than 0.

// Examples;
// countBy(1, 10) === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// countBy(2, 5) === [2, 4, 6, 8, 10];

// // ⚽ Solution

// 1)================================== -->

function countBy(x, n) {
	let z = [];
	let index = 1;

	while (z.length < n) {
		z.push(x * index);
		index++;
		console.log("lenght=" + z.length);
	}
	return z;
}

// 3)==================================

// 4)==================================

// 5)==================================

// 6)==================================

// 7)==================================

//8)==================================

//9)==================================

//10)==================================