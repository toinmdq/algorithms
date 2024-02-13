
function removeVowels(s: string): string {
	return [ ...s ].reduce((pre, cur) => {
		if (cur === 'a' || cur === 'e' || cur === 'i' || cur === 'o' || cur === 'u') return pre;
		return pre + cur;
	}, '')
};

console.log(removeVowels('opiausdfoiuasfdoiusadfoisudf'));