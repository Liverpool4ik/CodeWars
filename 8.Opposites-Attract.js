//// Opposites Attract

// // 🎹Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// ⚽ Solution
function lovefunc(flower1, flower2) {
	return flower1 % 2 !== flower2 % 2;
}
// 1)================================== -->

function lovefunc(flower1, flower2) {
	return (flower1 + flower2) % 2 === 1;
}

// 3)==================================
function lovefunc(flower1, flower2) {
	if (flower1 % 2 == 0 && flower2 % 2 !== 0) {
		return true;
	} else if (flower1 % 2 !== 0 && flower2 % 2 == 0) {
		return true;
	} else return false;
}
// 4)==================================
function lovefunc(flower1, flower2) {
	return (flower1 % 2 == 0 && flower2 % 2 != 0) ||
		(flower1 % 2 != 0 && flower2 % 2 == 0)
		? true
		: false;
}
// 5)==================================
function lovefunc(flower1, flower2) {
	return (flower1 + flower2) % 2 != 0; // moment of truth
}
// 6)==================================
const lovefunc = (Sarah, Timmy) => Boolean((Sarah + Timmy) % 2);

// 7)==================================
function lovefunc(flower1, flower2) {
	return flower1 % 2 != flower2 % 2;
}
//8)==================================
function lovefunc(flower1, flower2) {
	const num = flower1 + flower2;
	if (num % 2 == 0) {
		return false;
	} else {
		return true;
	}
}
//9)==================================

//10)==================================
