///6 kyu
// Count the smiley faces!
// // 🎹Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// ⚽ Solution
//return the total number of smiling faces in the array
function countSmileys(arr) {
	let count = 0;
	for (let index = 0; index < arr.length; arr++) {
		const face = arr[index];
		if (face.length >= 4 || face.length <= 1) continue;
		else if (
			face.length === 2 &&
			[":", ";"].includes(face[0]) &&
			[")", "D"].includes(face[1])
		)
			count += 1;
		else if (
			face.length === 3 &&
			[":", ";"].includes(face[0]) &&
			[")", "D"].includes(face[2]) &&
			["-", "~"].includes(face[1])
		)
			count += 1;
	}
	return count;
}

// 1)================================== -->
function countSmileys(arr) {
	return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}
// 2) ==================================   ---->
function countSmileys(arr) {
	var smileys = [
		":)",
		";)",
		":-)",
		";-)",
		";~)",
		":~)",
		":D",
		";D",
		":-D",
		":~D",
		";-D",
		";~D",
	];
	var count = 0;

	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < smileys.length; j++) {
			if (arr[i] === smileys[j]) {
				count++;
			}
		}
	}
	return count;
}
// 3)==================================  ---->
const countSmileys = (ss) =>
	ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);

// 4)==================================  ---->
const SMILING = /[:;]{1}[-~]?[)D]{1}/;

const countSmileys = (faces) =>
	faces.filter((face) => SMILING.test(face)).length;
// 5)==================================  ---->
const smileyRegEx = new RegExp(/[:;][-~]?[)D]/);
const isSmiley = (s) => smileyRegEx.test(s);
const countSmileys = (a) => a.filter(isSmiley).length;
// 6)==================================  ---->
countSmileys = (arr) => arr.filter((v) => /(:|;)(-|~)?(\)|D)/.test(v)).length;
// 7)==================================  ---->
const faces = new Set();
for (let eyes of [":", ";"])
	for (let nose of ["-", "~", ""])
		for (let mouth of [")", "D"]) faces.add(eyes + nose + mouth);

countSmileys = (arr) => arr.filter((x) => faces.has(x)).length;
//8)==================================  ---->
countSmileys = (arr) => arr.filter((e) => /[:;][-~]?[)D]/.test(e)).length;
//9)==================================  ---->
function countSmileys(arr) {
	return arr.reduce((n, s) => (/^[:;][-~]?[)D]$/.test(s) ? n + 1 : n), 0);
}
//10)==================================  ---->
