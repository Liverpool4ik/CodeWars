//// Beginner Series #1 School Paperwork

// // 🎹Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// ⚽ Solution

// 1)================================== -->

function paperwork(n, m) {
	return n > 0 && m > 0 ? n * m : 0;
}
// 3)==================================
function paperwork(n, m) {
	if (m < 0 || n < 0) {
		return 0;
	}
	return m * n;
}
// 4)==================================
paperwork = (n, m) => (n < 0 || m < 0 ? 0 : n * m);

// 5)==================================

if (n < 0 || m < 0) return 0;
return n * m;

// 6)==================================
function paperwork(n, m) {
	if (n <= 0 || m <= 0) {
		var pages = 0;
	} else pages = n * m;
	return pages;
}
// 7)==================================
function paperwork(n, m) {
	if (n < 0 || m < 0) {
		return 0;
	} else {
		return n * m;
	}
}
//8)==================================
const paperwork = (n, m) => n * m * (n > 0 && m > 0);
//9)==================================
const paperwork = (...n) => n.reduce((s, e) => s * Math.max(e, 0), 1);

//10)==================================
function paperwork(n, m) {
	return +(n > 0 && m > 0) && n * m;
}

//11)==================================

const paperwork = (classmates, pages) =>
	Math.max(0, classmates) * Math.max(0, pages);
