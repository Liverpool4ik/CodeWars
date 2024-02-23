//// Convert a String to a Number!

// // 🎹Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// ⚽ Solution
const stringToNumber1 = function (str) {
	return Number(str);
};
// 1)================================== -->
let stringToNumber2 = function (str) {
	return parseInt(str);
};
// 2) ==================================   ---->
let stringToNumber3 = function (str) {
	return +str;
};
// 3)==================================
const stringToNumber4 = (str) => Number(str);

// 4)==================================
let stringToNumber5 = Number;

// 5)==================================
const stringToNumber6 = (s) => parseInt(s);

// 6)==================================

// 7)==================================

//8)==================================

//9)==================================

//10)==================================
