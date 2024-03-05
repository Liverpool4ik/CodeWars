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

// function .... {

// }

// 2) ==================================   ---->

// 3)==================================  ---->

// 4)==================================  ---->

// 5)==================================  ---->

// 6)==================================  ---->

// 7)==================================  ---->

//8)==================================  ---->

//9)==================================  ---->

//10)==================================  ---->
