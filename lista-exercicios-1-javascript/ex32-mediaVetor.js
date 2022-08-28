function mediaVetor(vetor){
    let somaElementos=0
    for (i in vetor)
        somaElementos+=vetor[i]
    console.log("A média aritmética dos elementos do vetor é",somaElementos/vetor.length)
}

mediaVetor([1,2,3])
mediaVetor([10,5,2,0,6,7,5,478,9,76])
mediaVetor([7,8])