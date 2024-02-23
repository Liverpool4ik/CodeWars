////Sum of positive

// // 🎹You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// ⚽ Solution

// 1)================================== -->

function positiveSum(arr) {
	return arr
		.filter((number) => number > 0)
		.reduce((total, currenValue) => {
			return total + currenValue;
		}, 0);
}

// 2) ==================================   ---->
function positiveSum(arr) {
	var total = 0;
	for (i = 0; i < arr.length; i++) {
		// setup loop to go through array of given length
		if (arr[i] > 0) {
			// if arr[i] is greater than zero
			total += arr[i]; // add arr[i] to total
		}
	}
	return total; // return total
}
// 3)==================================  ---->
function positiveSum(arr) {
	return arr.filter((x) => x >= 0).reduce((a, c) => a + c, 0);
}
// 4)==================================  ---->
function positiveSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			sum += arr[i];
		}
	}
	return sum;
}
// 5)==================================  ---->
function positiveSum(arr) {
	let sum = 0;
	arr.forEach(function (v, i, a) {
		if (v > 0) {
			sum += v;
		}
	});
	return sum;
}
// 6)==================================  ---->

// 7)==================================  ---->

//8)==================================  ---->

//9)==================================  ---->

//10)==================================  ---->
