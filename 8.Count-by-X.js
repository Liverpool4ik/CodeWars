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
function countBy(x, n) {
	var z = [];
	for (i = 1; i <= n; i++) {
		z.push(x * i);
	}
	return z;
}
// 4)==================================
const countBy = (x, n) => Array.from({ length: n }, (v, k) => (k + 1) * x);

// 5)==================================
function countBy(x, n) {
	var z = [];
	for (var i = 1; i <= n; i++) {
		z.push(x * i);
	}
	return z;
}
// 6)==================================
const countBy = (x, n) => [...Array(n)].map((_, idx) => ++idx * x);
// 7)==================================
function countBy(x, n) {
	var z = [];
	for (var i = x; i <= x * n; i += x) {
		z.push(i);
	}
	return z;
}
//8)==================================
const countBy = (x, n) => Array.from({ length: n }, (_, k) => (k + 1) * x);

//9)==================================
function countBy(x, n) {
	var z = [];
	while (z.length < n) z.push(x * (z.length + 1));
	return z;
}
//10)==================================
function countBy(x, n) {
	return Array.apply(0, Array(n)).map(function (v, i) {
		return (i + 1) * x;
	});
}

//11)==================================

function countBy(x, n) {
	for (var a = [], i = 0; i < n; i++) {
		a.push(x * (1 + i));
	}

	return a;
}

//12)==================================
function countBy(x, n) {
	return Array.apply(null, Array(n)).map((_, i) => (i + 1) * x);
}
