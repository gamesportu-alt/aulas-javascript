const apiProdutos = [
    { id: 101, nome: 'monitor led', preco: 899.9 },
    { id: 102, nome: 'teclado mecanico', preco: 250.0 },
    { id: 103, nome: 'mouse gamer', preco: 125.45 }
];


const produtosFormatados = apiProdutos.map((produto) => {
    return {
        ...produto,
        nome: produto.nome.charAt(0).toUpperCase() + produto.nome.slice(1),
        preco: `R$ ${produto.preco.toFixed(2).replace('.', ',')}`
    };
});


console.log(produtosFormatados);