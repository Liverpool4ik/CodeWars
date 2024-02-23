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

// 3)==================================  ---->

// 4)==================================  ---->

// 5)==================================  ---->

// 6)==================================  ---->

// 7)==================================  ---->

//8)==================================  ---->

//9)==================================  ---->

//10)==================================  ---->
