
function problem1342(num: number): number {
	let steps = 0;
	while (num > 0) {
		if ((num % 2) !== 0) {
			num -= 1;
		} else {
			num /= 2;
		}
		steps++;
	}
	return steps;
};

console.log(problem1342(15))