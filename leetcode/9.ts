/*
	Given an integer x, return true if x is a palindrome, and false otherwise.
*/

export const isPalindrome = (x: number): boolean => {

	if (x < 0) return false;

	let reversed = '';
	for (let number of (x + '')) {
		reversed = number + reversed;
	}
	console.log(Number(reversed) === x);
	return Number(reversed) === x;

}