
const fizzBuzz = (n: number): string[] => {
	return Array.from({ length: n }, (_, i) => {
		const index = i + 1;
		const fizz = index % 3 === 0 ? 'Fizz' : '';
		const buzz = index % 5 === 0 ? 'Buzz' : '';
		return fizz + buzz || '' + index;
	});

};

console.log(fizzBuzz(15));