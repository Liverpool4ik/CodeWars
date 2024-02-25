//7.String-ends-with.js
// // 🎹Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// ⚽ Solution

const solution = (str, ending) => str.endsWith(ending);
// 1)================================== -->

function solution(str, ending) {
	if (typeof str != "string" || typeof ending != "string") throw "wrong type";
	if (ending.length > str.length) return false;
	return str.substr(str.length - ending.length, ending.length) == ending;
}
// 2) ==================================   ---->
function solution(str, ending) {
	return str.substr(-ending.length) == ending;
}
// 3)==================================  ---->
function solution(str, ending) {
	var l = ending.length;
	var str = str.slice(-l);
	return str.match(ending) ? true : false;
}
// 4)==================================  ---->
solution = (s, e) => s.endsWith(e);

// 5)==================================  ---->
function solution(str, ending) {
	let strArray = str.split("");
	let endArray = ending.split("");
	let wasteArrayLength = strArray.length - endArray.length;
	let newArray = [];

	for (let i = wasteArrayLength; i < strArray.length; i++) {
		newArray.push(strArray[i]);
	}

	let newEnding = endArray.join();
	let newString = newArray.join();

	if (newString == newEnding) {
		return true;
	} else {
		return false;
	}
}
// 6)==================================  ---->
function solution(str, ending) {
	return (
		str
			.split("")
			.reverse()
			.join("")
			.search(ending.split("").reverse().join("")) === 0
	);
}
// 7)==================================  ---->
function solution(str, ending) {
	// TODO: complete
	return str.slice(str.length - ending.length) == ending;
}
//8)==================================  ---->
function solution(str, ending) {
	var test = str.slice(-ending.length);
	if (test === ending) {
		return true;
	}
	return false;
}
//9)==================================  ---->

//10)==================================  ---->
