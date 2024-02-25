// 🎹
// Simple-multiplication
// <!-- This kata is about multiplying a given number by eight if it is an even number and by nine otherwise. -->

// <!--
// =============================================================================================

// ⚽ Solution

// 1)================================== -->

function simpleMultiplication(number) {
	if (number % 2 === 0) {
		return number * 8;
	} else {
		return number * 9;
	}
}

console.log(simpleMultiplication(43));

// 2)================================== -->
function simpleMultiplication(number) {
	return number % 2 === 0 ? number * 8 : number * 9;
}

// 3)================================== -->

function simpleMultiplication(value) {
	if (value % 2 === 0) {
		return value * 8;
	} else {
		return value * 9;
	}
}

// 4)================================== -->
function simpleMultiplication(number) {
	return number % 2 == 0 ? number * 8 : number * 9;
}
// 5)================================== -->
function simpleMultiplication(n) {
	return n * (n % 2 ? 9 : 8);
}

// 6)================================== -->
const simpleMultiplication = (n) => n * (n % 2 ? 9 : 8);

// 7)================================== -->
function simpleMultiplication(number) {
	return number * (number % 2 ? 9 : 8);
}

// 8)================================== -->

const simpleMultiplication = (number) =>
	number % 2 === 0 ? number * 8 : number * 9;
