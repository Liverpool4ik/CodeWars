//Are they the "same"?
// // 🎹Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// ⚽ Solution
function comp(array1, array2) {
	if (array1 && array2) {
		let arrayTwoSqrt = array2.map((num) => Math.sqrt(num));
		return (
			array1.reduce((a, v) => a + v, 0) ===
			arrayTwoSqrt.reduce((a, v) => a + v, 0)
		);
	} else {
		return false;
	}
}

// 1)================================== -->

function comp(array1, array2) {
	if (array1 == null || array2 == null) return false;
	array1.sort((a, b) => a - b);
	array2.sort((a, b) => a - b);
	return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}
// 2) ==================================   ---->
function comp(a, b) {
	return (
		!!a &&
		!!b &&
		a
			.map((x) => x * x)
			.sort()
			.join() == b.sort().join()
	);
}
// 3)==================================  ---->
const comp = (array1, array2) =>
	Array.isArray(array1) &&
	Array.isArray(array2) &&
	array1.every((item) => {
		const index = array2.indexOf(Math.pow(item, 2));
		return index > -1 ? array2.splice(index, 1) : false;
	});
// 4)==================================  ---->
function comp(a, b) {
	if (!a || !b || a.length !== b.length) return false;
	return (
		a
			.map((x) => x * x)
			.sort()
			.toString() === b.sort().toString()
	);
}
// 5)==================================  ---->
function comp(array1, array2) {
	if (array1 == null || array2 == null) return false;
	array1.sort((a, b) => a - b);
	array2.sort((a, b) => a - b);
	return array1.every((item, index) => item * item == array2[index]);
}
// 6)==================================  ---->
function comp(a, b) {
	try {
		var a1 = a.map((x) => x * x).sort();
		b.sort();
	} catch (err) {
		return false;
	}

	return a1.toString() == b.toString() ? true : false;
}
// 7)==================================  ---->
function comp(array1, array2) {
	if (array1 == null || array2 == null) {
		return false;
	}

	let count = array2.length;
	let arrCheck = [];
	let answer = true;
	array2.forEach((elem) => {
		array2.push(Math.sqrt(elem));
	});

	for (let i = 0; i < count; i++) {
		array2.shift();
	}

	array2.forEach((elem) => {
		if (!Number.isInteger(elem)) {
			answer = false;
		}
	});

	if (answer == false) {
		return false;
	}

	count = 0;

	array1.sort();
	array2.sort();
	console.log(array1);
	console.log(array2);

	for (let i = 0; i < array1.length; i++) {
		if (array1[i] == array2[i]) {
			count++;
		} else {
			count--;
		}
	}

	if (array1 != null && count != array1.length) {
		return false;
	} else {
		return true;
	}
}
//8)==================================  ---->
function comp(a1, a2) {
	if (a2 === null || a1 === null) {
		return false;
	}
	const a1maped = a1.map((e) => {
		return e * e;
	});
	a2.sort(), a1maped.sort();
	return JSON.stringify(a2) === JSON.stringify(a1maped);
}
//9)==================================  ---->

//10)==================================  ---->
