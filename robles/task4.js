/*
	Dada una cadena de texto, darle vuelta e invertir el orden
	de sus caracteres, sin usar metodos propios del lenguaje,
	solo estructuras de control.
*/

const reverseString = (string) => {
	let reversed = '';
	for (const letter of string) {
		reversed = letter + reversed;
	}
	return reversed;
}

console.log(reverseString('asdffg'));