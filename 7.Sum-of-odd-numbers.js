// Sum of odd numbers
// // 🎹Given the triangle of consecutive odd numbers:

// ⚽ Solution
function rowSumOddNumbers(n) {
	return n ** 3;
}

// 1)================================== -->
function rowSumOddNumbers(n) {
	return Math.pow(n, 3);
}
// 2) ==================================   ---->
let rowSumOddNumbers = (n) => n ** 3;

// 3)==================================  ---->
function rowSumOddNumbers(n) {
	var start = n * n - n + 1;
	var result = 0;

	for (i = 0; i < n; i++) {
		result = result + (start + i * 2);
	}

	return result;
}
// 4)==================================  ---->

// 5)==================================  ---->

// 6)==================================  ---->

// 7)==================================  ---->

//8)==================================  ---->

//9)==================================  ---->

//10)==================================  ---->
