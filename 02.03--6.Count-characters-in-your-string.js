// 6.Count-characters-in-your-string.js

// // 🎹The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// ⚽ Solution
function count(string) {
	//
	return {};
}
// 1)================================== -->

const count = (s) => require("lodash").countBy(s);
// 2) ==================================   ---->
function count(string) {
	var count = {};
	string.split("").forEach(function (s) {
		count[s] ? count[s]++ : (count[s] = 1);
	});
	return count;
}
// 3)==================================  ---->
function count(string) {
	return string.split("").reduce(function (counts, char) {
		counts[char] = (counts[char] || 0) + 1;
		return counts;
	}, {});
}
// 4)==================================  ---->
function count(string) {
	var result = {};

	for (let i = 0; i < string.length; i++) {
		if (result.hasOwnProperty(string[i])) {
			result[string[i]] += 1;
		} else {
			result[string[i]] = 1;
		}
	}

	return result;
}
// 5)==================================  ---->
const count = require("lodash").countBy;

// 6)==================================  ---->
function count(string) {
	return string.split("").reduce(function (obj, elem) {
		if (elem in obj) obj[elem]++;
		else obj[elem] = 1;
		return obj;
	}, {});
}
// 7)==================================  ---->
function count(string) {
	var newString = string.toLowerCase();
	var characterCount = {};
	var alphabets = "abcdefghijklmnopqrstuvwxyz";
	function countPos(char) {
		var count = 0;
		var pos = newString.indexOf(char);
		while (pos !== -1) {
			count++;
			pos = newString.indexOf(char, pos + 1);
		}
		return count;
	}
	for (var i = 0; i < alphabets.length; i++) {
		var value = countPos(alphabets.charAt(i));
		if (value) {
			characterCount[alphabets.charAt(i)] = value;
		}
	}
	return characterCount;
}
//8)==================================  ---->

//9)==================================  ---->

//10)==================================  ---->
