//// Invert values
// // 🎹Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// ⚽ Solution

function invert(array) {
	return;
}

// 1)================================== -->
function invert(array) {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(array[i] * -1);
	}

	return result;
}

// 2) ==================================   ---->
const invert = (array) => array.map((num) => -num);

// 3)==================================  ---->
function invert(array) {
	return array.map((x) => (x === 0 ? x : -x));
}
// 4)==================================  ---->
function invert(array) {
	return array.map((i) => 0 - i);
}
// 5)==================================  ---->
function invert(array) {
	return array.map((el) => -el);
}
// 6)==================================  ---->
function invert(array) {
	return array.map((i) => -i);
}
// 7)==================================  ---->

function invert(array) {
	return array.map((n) => n * -i);
}
//8)==================================  ---->

//9)==================================  ---->

//10)==================================  ---->
