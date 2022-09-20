const operaVetor1=(vetor,numero)=>{
    for (i in vetor)
        vetor[i]=vetor[i]*numero
    return vetor
}

const operaVetor2=(vetor,numero)=>{
    for (i in vetor)
        vetor[i]>5?vetor[i]=vetor[i]*numero:vetor[i]=vetor[i]
    return vetor
}

console.log(operaVetor1([1,2,3],5))

console.log(operaVetor2([1,6,3],5))