const verificarEstoque=(produto)=>{
 
if (produto < 5){
    console.log("Estoque normal");
}else if(produto> 5){
    console.log("Estoque critico");
}
}

verificarEstoque(3);