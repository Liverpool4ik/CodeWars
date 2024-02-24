// Convert boolean values to strings 'Yes' or 'No'.

// // 🎹 Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// ⚽ Solution

function boolToWord(bool) {
	if (bool) return "Yes";
	return "No";
}
// 1)================================== -->
function boolToWord(bool) {
	if (bool) {
		return "Yes";
	} else {
		return "No";
	}
}

// 2) ==================================   ---->
let boolToWord = (bool) => (bool ? "Yes" : "No");

// 3)==================================  ---->
function boolToWord(bool) {
	if (bool === true) {
		return "Yes";
	} else {
		return "No";
	}
}

boolToWord(false);
// 4)==================================  ---->
function boolToWord(bool) {
	return bool === true ? "Yes" : "No";
}
// 5)==================================  ---->

// 6)==================================  ---->

// 7)==================================  ---->

//8)==================================  ---->

//9)==================================  ---->

//10)==================================  ---->
