const totalCompra = (valores) =>{
let total=0;

for(const valor of valores){
    total = total + valor;
}

return total;

}
 console.log(totalCompra([15 , 40 , 50]));