
/*
	Dada una cadena de texto, comprobar si es un palindromo o no.
	Los palindromos son palabras que se leen igual aun estando invertidas.
	Por ejemplo: ana, bob, otto, allivessevilla
*/

const verifyString = (string) => {
	let reversedString = '';

	for (let i = string.length - 1; i >= 0; i--) {
		reversedString += string[ i ]
	}
	return reversedString === string;
}

console.log(verifyString('allivessevilla'));