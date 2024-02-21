////Sentence Smash

// // 🎹
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// ⚽ Solution

// 1)================================== -->

function smash(words) {
	return words.join(" ");
}
// 3)==================================
const smash = (words) => words.join(" ");

// 4)==================================
function smash(words) {
	"use strict";
	return words.join(" ");
}
// 5)==================================
let smash = (words) => words.join(" ");

// 6)==================================
function smash(words) {
	"use strict";
	return words.join(" ").trim();
}
// 7)==================================
const smash = (arr) => arr.join(" ");

//8)==================================
function smash(words) {
	let tostring = words.toString();

	return tostring.replace(/,/g, " ");
}
//9)==================================
function smash(words) {
	"use strict";

	return [...words].join(" ");
}
//10)==================================
