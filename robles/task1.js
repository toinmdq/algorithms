/*
	Dado un numero devolver su tabla de multiplicar completa
	# Tabla del 5 #
	1 x 5 = 5
	2 x 5 = 10
	3 x 5 = 15
	...
*/

const makeString = (number) => {

	let string = `# Tabla del ${ number } #\n`

	for (let i = 1; i <= 10; i++) {
		string += `${ i } x ${ number } = ${ i * number } \n`
	}

	return string;
}

console.log(makeString(4));