//7.Reverse-words.js
// // 🎹Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// ⚽ Solution

const reverseWords = (str) =>
	str
		.split(" ")
		.map((element) => [...element].reverse().join(""))
		.join(" ");

// 1)================================== -->

function reverseWords(str) {
	return str
		.split(" ")
		.map(function (word) {
			return word.split("").reverse().join("");
		})
		.join(" ");
}

// 2) ==================================   ---->
function reverseWords(str) {
	let reversedWord = "";
	let reversedStr = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== " ") {
			reversedWord = str[i] + reversedWord;
		} else {
			reversedStr += reversedWord + " ";
			reversedWord = "";
		}
	}
	return reversedStr + reversedWord;
}
// 3)==================================  ---->

// 4)==================================  ---->

// 5)==================================  ---->

// 6)==================================  ---->

// 7)==================================  ---->

//8)==================================  ---->

//9)==================================  ---->

//10)==================================  ---->
