// Keep Hydrated!

// // 🎹Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// ⚽ Solution

// 1)================================== -->

function litres(time) {
	return Math.floor(time * 0.5);
}
// 2)================================== -->

function litres(time) {
	let lit = time * 0.5;
	return Math.floor(lit);
}
// 2)================================== -->

function litres(time) {
	return parseInt(time / 2);
}
// 3)==================================
function litres(time) {
	return Math.floor(time / 2);
}
// 4)==================================
litres = (t) => ~~(t / 2);

// 5)==================================
function litres(time) {
	var lit = time * 0.5;
	return Math.floor(lit);
}
// 6)==================================
function litres(time) {
	return time >> 1;
}
// 7)==================================
function litres(time) {
	return (time / 2) | 0;
}
//8)==================================
function litres(time) {
	const litres = 0.5;
	let drink = litres * time;
	return Math.floor(drink);
}
//9)==================================
function litres(time) {
	a = 0.5;
	b = time;
	c = Math.floor(a * b);
	//alert(c);

	return c;
}
//10)==================================
