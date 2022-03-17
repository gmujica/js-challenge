function sortSquaredArr (arr) {
	return arr.map(num => Math.pow(num, 2)).sort((a,b) => a - b);
}

// test
console.log(sortSquaredArr([1, 2, 3, 5, 6, 8, 9]));
console.log(sortSquaredArr([-2, -1]));
console.log(sortSquaredArr([-10, -5, 0, 5, 10]));