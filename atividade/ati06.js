const isAdult = (a,b) => (a > b) ? "permitido" : a < b ? "bloqueado"  : "permitido";

console.log(isAdult(8,18));