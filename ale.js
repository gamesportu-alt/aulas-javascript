const alunos = [
    {nome:'Felipe',nota:5},
    {nome:'Thomas',nota:9},
    {nome:'Lucas',nota:7}
];

alunos.forEach((aluno) => {
    if (aluno.nota >= 7) {
        console.log(`${aluno.nome}: vc passou`);
    } else {
        console.log(`${aluno.nome}: vc reprovou`);
    }
});