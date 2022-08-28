const pagarAnuidade=(mes,valor)=>{
    return (mes<parseInt(1) || mes>parseInt(12))?"Mês inválido, cálculo negado!":valor*1.05**(mes-1)
}

console.log(pagarAnuidade(1,500))
console.log(pagarAnuidade(3,600))
console.log(pagarAnuidade(15,400))
console.log(pagarAnuidade(-2,500))