function avaliaVetor(vetor){
    let somaDentro=0;let somaFora=0
    for (i in vetor)
        vetor[i]>=10 && vetor[i]<=20?somaDentro++:somaFora++
    console.log(`${somaDentro} componentes do vetor pertencem ao intervalo escolhido.`)
    console.log(`${somaFora} componentes do vetor não pertencem ao intervalo escolhido.\n`)
}

avaliaVetor([1,14,2,80,-1,5,555])
avaliaVetor([10,11,12,55,0])