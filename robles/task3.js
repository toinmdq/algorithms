/*
	Dada una palabra, buscarla en la frase y devolver cuantas veces aparece.
	La frase y la palabra deben ser parametros de la funcion.
*/

const findWord = (string, search) => {
	if (!string.includes(search)) return 0;

	const words = string
		.toLowerCase()
		.replace(/[,.\?\!\-\_\+\=]/g, '')
		.split(' ');

	const hash = {};

	for (word of words) {
		if (hash[ word ]) {
			hash[ word ]++;
			continue;
		}
		hash[ word ] = 1
	}

	return hash[ search ] ?? 0;

}


console.log(findWord('hola soy una palabra en una frase, PALABRA.', 'una'))