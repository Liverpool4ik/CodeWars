//03.03--7.Testing 1-2-3
// // 🎹
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// ⚽ Solution
var number = function (array) {
	//your awesome code here
};
// 1)================================== -->

const number = (array) =>
	array.map((element, index) => `$(index + 1): $(element)`);
// 2) ==================================   ---->
var number = function (array) {
	return array.map(function (line, index) {
		return index + 1 + ": " + line;
	});
};
// 3)==================================  ---->
const number = (array) => array.map((n, i) => `${i + 1}: ${n}`);

// 4)==================================  ---->
function number(array) {
	return array.map(function (line, i) {
		return String(i + 1) + ": " + line;
	});
}
// 5)==================================  ---->
var number = function (array) {
	if (array.length == 0) return [];

	for (let i = 0; i < array.length; ++i) array[i] = i + 1 + ": " + array[i];

	return array;
};
// 6)==================================  ---->

// 7)==================================  ---->

//8)==================================  ---->

//9)==================================  ---->

//10)==================================  ---->
