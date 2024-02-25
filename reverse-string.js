//reverse-string

// ❓

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// ⚽ Solution

let str = "world";
function reversedString(str) {
	return str.split("").reverse().join("");
}

console.log(str);
