const sorteioEm10=(numero)=>{
    numeroSorteado=Math.floor(Math.random() * 10 + 1)
    return numero==numeroSorteado?"Parabéns o numero sorteado foi o "+numero:"Que pena! O número sorteado foi o "+numeroSorteado
}

console.log(sorteioEm10(10))
console.log(sorteioEm10(5))
console.log(sorteioEm10(5))