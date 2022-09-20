const toReal=(n)=>{return n.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}

console.log(toReal(0.1+0.2))
console.log(toReal(1535.78))