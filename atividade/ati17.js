const anos = (anoFinal) => {
    for(let ano=2000; ano  <= anoFinal; ano++){
        if (ano % 4 === 0){
            console.log(ano)
        }
    }
};
 anos(2025)