//6.Replace-With-Alphabet-Position.js
// // 🎹DESCRIPTION:
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// ⚽ Solution

function alphabetPosition(text) {
	return text;
}

// 1)================================== -->
function alphabetPosition(text) {
	return text.toLowerCase().match(/[a-z]/g)
		? text
				.toLowerCase()
				.match(/[a-z]/g)
				.map((i) => i.charCodeAt(i) - 96)
				.join(" ")
		: "";
}
// 2) ==================================   ---->

// 3)==================================  ---->

// 4)==================================  ---->

// 5)==================================  ---->

// 6)==================================  ---->

// 7)==================================  ---->

//8)==================================  ---->

//9)==================================  ---->

//10)==================================  ---->
