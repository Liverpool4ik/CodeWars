// 🎹opposite-Number
// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse)

// Examples:
// 1: -1
// 14: -14
// -34: 34

// ⚽ Solution

// 1)==================================
function opposite(number) {
	return -1 * number;
}

// 2)==================================
function opposite(number) {
	return number * -1;
}

// 3)==================================
function opposite(number) {
	return -number;
}
console.log(opposite(-220));
