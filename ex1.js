const isAdult = (a,b) => (a > b) ? "é maior de idade" : a < b ? "é menor de idade"  : "tem a mesma idade";

console.log(isAdult(20,18));