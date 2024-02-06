
const runningSumOf1dArray = (nums: number[]): number[] => {
	return nums.reduce((pre, cur) =>
		([ ...pre, (pre.reverse()[ 0 ] ?? 0) + cur ])
		, [] as number[])
};

const result = runningSumOf1dArray([ 1, 2, 3, 4 ]);
console.log(result);