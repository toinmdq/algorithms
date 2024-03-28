/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/

export const romanToInt = (s: string): number => {

	const hash: Record<string, number> = {
		I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
		IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900
	}

	let result = 0;

	for (let i = 0; i < s?.length; i++) {
		const isDouble = s[ i ] + s[ i + 1 ];
		if (hash[ isDouble ]) {
			result += hash[ isDouble ];
			i++;
			continue;
		}
		result += hash[ s[ i ] ];
	}

	return result;
}