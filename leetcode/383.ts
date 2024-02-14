
function canConstruct(ransomNote: string, magazine: string): boolean {

	let hashMagazine: Record<string, number> = {};

	for (let i = 0; i < magazine.length; i++) {
		hashMagazine[ magazine[ i ] ]
			? hashMagazine[ magazine[ i ] ]++
			: hashMagazine[ magazine[ i ] ] = 1;
	}

	for (let i = 0; i < ransomNote.length; i++) {
		const ch = ransomNote[ i ];
		const count = hashMagazine[ ch ] ?? 0;
		if (count === 0) return false;
		hashMagazine[ ch ]--;
	}

	return true;
};

console.log(canConstruct('abcd', 'batfgcdp'));