let energiaInicial = 100
let dano = 10

while(energiaInicial > 0){
    energiaInicial = energiaInicial - dano;

    if (energiaInicial < 0) {
        energiaInicial = 0
    }
    console.log(energiaInicial);
}
