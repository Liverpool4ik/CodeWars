//Fake Binary

// 🎹Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {}

// ⚽ Solution

// 1)================================== -->

function fakeBin(x) {
	let result = "";

	for (let i = 0; i < x.length; i++) {
		if (x[i] >= 5) {
			result += "1";
		} else {
			result += "0";
		}
	}
	return result;
}
// 2) ==================================   ---->
function fakeBin(x) {
	return x
		.split("")
		.map((n) => (n < 5 ? 0 : 1))
		.join("");
}
// 3)==================================  ---->

// 4)==================================  ---->

// 5)==================================  ---->

// 6)==================================  ---->

// 7)==================================  ---->

//8)==================================  ---->

//9)==================================  ---->

//10)==================================  ---->
