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
function towerBuilder(nFloors) {
	var tower = [];
	for (var i = 0; i < nFloors; i++) {
		tower.push(
			" ".repeat(nFloors - i - 1) +
				"*".repeat(i * 2 + 1) +
				" ".repeat(nFloors - i - 1)
		);
	}
	return tower;
}
// 2) ==================================   ---->
function towerBuilder(n) {
	return Array.from({ length: n }, function (v, k) {
		const spaces = " ".repeat(n - k - 1);
		return spaces + "*".repeat(k + k + 1) + spaces;
	});
}
// 3)==================================  ---->
function towerBuilder(nFloors) {
	let tower = [];
	let baseWidth = nFloors * 2 - 1;

	for (let i = 0; i < nFloors; i++) {
		let blocks = "*".repeat(baseWidth);
		let blank = " ".repeat(i);
		let level = blank + blocks + blank;

		tower.unshift(level);
		baseWidth -= 2;
	}
	return tower;
}
// 4)==================================  ---->
function towerBuilder(nFloors) {
	const repeat = (ch) => (n) => Array(n + 1).join(ch);
	const space = repeat(" ");
	const star = repeat("*");
	const center = (length) => (s) =>
		space((length - s.length) / 2) + s + space((length - s.length) / 2);
	const baseSize = nFloors * 2 - 1;
	const buildFloor = (_, i) => star(2 * i + 1);

	return Array.from({ length: nFloors }, buildFloor).map(center(baseSize));
}
// 5)==================================  ---->
function towerBuilder(nFloors) {
	var tower = [];

	for (var i = 0; i < nFloors; i++) {
		var padding = Array(nFloors - i).join(" ");

		tower.push(padding + Array(i * 2 + 2).join("*") + padding);
	}

	return tower;
}
// 6)==================================  ---->

// 7)==================================  ---->

//8)==================================  ---->

//9)==================================  ---->

//10)==================================  ---->
