//6.Build-Tower
// // 🎹Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// ⚽ Solution

function towerBuilder(nFloors) {
	// build here
	let result = [];

	while (result.length < nFloors) {
		let row = [];
		for (let i = 0; i < nFloors * 2 - 1; i++) {
			if (i < nFloors - 1 - result.length || i >= nFloors + result.length) {
				row.push(" ");
			} else {
				row.push("*");
			}
		}
		result.push(row.join(""));
	}
	return result;
}
// 1)================================== -->

// function .... {

// }

// 2) ==================================   ---->

// 3)==================================  ---->

// 4)==================================  ---->

// 5)==================================  ---->

// 6)==================================  ---->

// 7)==================================  ---->

//8)==================================  ---->

//9)==================================  ---->

//10)==================================  ---->
