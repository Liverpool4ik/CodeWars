// //// Counting sheep...

// // // 🎹Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined
// [
// 	true,
// 	true,
// 	true,
// 	false,
// 	true,
// 	true,
// 	true,
// 	true,
// 	true,
// 	false,
// 	true,
// 	false,
// 	true,
// 	false,
// 	false,
// 	true,
// 	true,
// 	true,
// 	true,
// 	true,
// 	false,
// 	false,
// 	true,
// 	true,
// ];

// // ⚽ Solution

// // 1)================================== -->
function countSheeps(array) {
	let result = 0;

	for (let i = 0; i < array.lenght; i++)
		if (array[i] === true) {
			result += 1;
		}
	return result;
}

// // 3)==================================
function countSheeps(array) {
	let result = 0;

	array.forEach((elem) => {
		if (elem) {
			result += 1;
		}
	});
	return result;
}
// // 4)==================================

// // 5)==================================

// // 6)==================================

// // 7)==================================

// //8)==================================

// //9)==================================

// //10)==================================
