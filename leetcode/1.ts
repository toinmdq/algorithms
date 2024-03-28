/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

export const twoSum = (nums: number[], target: number): number[] => {

	const hash: Record<string, number> = {};

	for (let i = 0; i < nums.length; i++) {
		if ((hash[ target - nums[ i ] ]) >= 0 && (hash[ target - nums[ i ] ] !== i))
			return [ hash[ target - nums[ i ] ], i ];
		hash[ nums[ i ] ] = i;
	}

	return [];

};

console.log(twoSum([ 2, 7, 11, 15 ], 9));