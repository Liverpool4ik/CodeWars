//8. Sum-without-highest-and-lowest-number.js

// // 🎹Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// ⚽ Solution
function sumArray(array) {
	if (!array) return 0;
	return array
		.sort((a, b) => a - b)
		.slice(1, -1)
		.reduce((sum, num) => (sum += num), 0);
}

// 1)================================== -->

function sumArray(array) {
	if (array == null) {
		return 0;
	} else if (array.length < 2) {
		return 0;
	} else {
		array = array.sort(function (a, b) {
			return a - b;
		});
		var total = 0;
		for (var i = 1; i < array.length - 1; i++) {
			total += array[i];
		}
		return total;
	}
}

// 2) ==================================   ---->
function sumArray(array) {
	if (array == null || array.length <= 2) {
		return 0;
	}

	var max = Math.max.apply(Math, array);
	var min = Math.min.apply(Math, array);
	var sum = 0;

	for (i = 0; i < array.length; i++) {
		sum += array[i];
	}

	return sum - max - min;
}
// 3)==================================  ---->
const sumArray = ($) =>
	!$
		? 0
		: $.sort((a, b) => a - b)
				.slice(1, -1)
				.reduce((acc, el) => acc + el, 0);

// 4)==================================  ---->
function sumArray(array) {
	if (array) {
		array.sort(function (a, b) {
			return a - b;
		});
		var newAry = array.slice(1, -1);
		return newAry.reduce(function (acc, val) {
			return acc + val;
		}, 0);
	} else {
		return 0;
	}
}
// 5)==================================  ---->
function sumArray(array) {
	if (!array || array.length <= 1) {
		return 0;
	}

	let smallest = Infinity;
	let biggest = -Infinity;
	let total = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] < smallest) {
			smallest = array[i];
		}
		if (array[i] > biggest) {
			biggest = array[i];
		}

		total += array[i];
	}

	return total - biggest - smallest;
}
// 6)==================================  ---->
function sumArray(arr) {
	if (!arr || !arr.length || arr.length === 1) return 0;

	const max = Math.max(...arr);
	const min = Math.min(...arr);
	const sum = arr.reduce((a, b) => a + b) - (max + min);

	return sum;
}
// 7)==================================  ---->

//8)==================================  ---->

//9)==================================  ---->

//10)==================================  ---->
