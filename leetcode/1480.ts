
const problem1480 = (nums: number[]): number[] => {
	return nums.reduce((pre, cur) =>
		([ ...pre, (pre.reverse()[ 0 ] ?? 0) + cur ])
		, [] as number[])
};

console.log(problem1480([ 1, 2, 3, 4 ]));