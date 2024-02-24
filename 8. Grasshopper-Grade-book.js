//8. Grasshopper-Grade-book.js
// // // 🎹Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// ⚽ Solution
function getGrade(s1, s2, s3) {
	// Code here
}

// 1)================================== -->
function getGrade(s1, s2, s3) {
	const avg = (s1 + s2 + s3) / 3;
	if (avg >= 90) return "A";
	if (avg >= 80) return "B";
	if (avg >= 70) return "C";
	if (avg >= 60) return "D";
	return "F";
}
// 2) ==================================   ---->
function getGrade(...scores) {
	let average = scores.reduce((a, b) => a + b) / scores.length;

	if (average >= 90) return "A";
	else if (average >= 80) return "B";
	else if (average >= 70) return "C";
	else if (average >= 60) return "D";
	else return "F";
}
// 3)==================================  ---->
function getGrade(s1, s2, s3) {
	var avg = (s1 + s2 + s3) / 3;
	switch (true) {
		case avg >= 90:
			return "A";
		case avg >= 80:
			return "B";
		case avg >= 70:
			return "C";
		case avg >= 60:
			return "D";
		default:
			return "F";
	}
}
// 4)==================================  ---->
function getGrade(s1, s2, s3) {
	let meanScore = (s1 + s2 + s3) / 3;
	if (meanScore >= 90 && meanScore <= 100) {
		return "A";
	} else if (meanScore >= 80 && meanScore < 90) {
		return "B";
	} else if (meanScore >= 70 && meanScore < 80) {
		return "C";
	} else if (meanScore >= 60 && meanScore < 70) {
		return "D";
	} else {
		return "F";
	}
}
// 5)==================================  ---->

// 6)==================================  ---->

// 7)==================================  ---->

//8)==================================  ---->

//9)==================================  ---->

//10)==================================  ---->
