let arrayPalavra =[];
let arrayPalavrainvertida = [];
let palindromo = null;

function meuArray (palavra) {
    

    for(index = 0; index < palavra.length; index += 1) {
        arrayPalavra.push(palavra[index]);
    }
    return arrayPalavra;
} 


function meuArrayinvertido (palavra) {
    for (index = palavra.length -1; index != -1; index -= 1) {
        arrayPalavrainvertida.push(palavra[index]);
    }
    return arrayPalavrainvertida
}

console.log(meuArray('arara'));
console.log(meuArrayinvertido('arara'));

function comparacao (arrayPalavra, arrayPalavrainvertida) {
    if (arrayPalavra === arrayPalavrainvertida){
        palindromo = true;
    } else {
        palindromo = false;
        }
        return palindromo;
    } 
console.log (comparacao (arrayPalavra,arrayPalavrainvertida));
console.log (palindromo);
