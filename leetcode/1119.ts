
/*
Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
*/

export const removeVowels = (s: string): string => {
	let array: string = '';
	for (let i = 0; i < s.length; i++) {
		if ([ 'a', 'e', 'i', 'o', 'u' ].includes(s[ i ])) continue;
		array += s[ i ];
	}
	return array;
};
