
const firstUniqueCharacter = (s: string): number => {
	const result = [ ...s ].map((ch, index) => {
		if (s.slice(index + 1).concat(s.slice(0, index)).includes(ch)) return -1;
		return index;
	});
	const found = result.find((value) => value >= 0) ?? -1;
	return found;
};

firstUniqueCharacter('dddccdbba');


// HASHMAP
const firstUniqueCharacter2 = (s: string): number => {

	const count: Record<string, number> = {};
	for (let i = 0; i < s.length; i++) {
		count[ s[ i ] ] = (count[ s[ i ] ] ?? 0) + 1;
	}
	for (let i = 0; i < s.length; i++) {
		if (count[ s[ i ] ] === 1) return i
	}
	return -1;
};

const result = firstUniqueCharacter2('dddccdbba');
console.log(result);