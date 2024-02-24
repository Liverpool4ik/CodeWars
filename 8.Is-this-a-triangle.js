//8.Is this a triangle?

// // // 🎹DESCRIPTION:
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).
function isTriangle(a, b, c) {
	return false;
}
// ⚽ Solution
function isTriangle(a, b, c) {
	return a + b > c && a + c > b && b + c > a ? true : false;
}
// 1)================================== -->
function isTriangle(a, b, c) {
	if (a > 0 && b > 0 && c > 0) {
		if (a < b + c && b < a + c && c < a + b) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

// 2) ==================================   ---->
function isTriangle(a, b, c) {
	var sides = [a, b, c].sort();
	return sides[0] + sides[1] > sides[2];
}
// 3)==================================  ---->
function isTriangle(a, b, c) {
	return b + c > a && a + b > c && a + c > b;
}
// 4)==================================  ---->

// 5)==================================  ---->

// 6)==================================  ---->

// 7)==================================  ---->

//8)==================================  ---->

//9)==================================  ---->

//10)==================================  ---->
