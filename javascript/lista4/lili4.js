const nomesRepetidos = ['João','Maria','João','Pedro','Maria'];

const limparLista=(nomes)=>{
    return [...new Set(nomes)];
}

const nomesUnicos=limparLista(nomesRepetidos);

console.log(nomesUnicos);