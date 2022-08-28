const calculaParesImpares=(vetor)=>{
    let somaPar=0
    let somaImpar=0
    for (i in vetor)
        vetor[i]%2==0?somaPar++:somaImpar++
    console.log(`${somaPar} do vetor são números pares.`)
    console.log(`${somaImpar} do vetor são números ímpares.\n`)
}

calculaParesImpares([1,2,3,4,5])
calculaParesImpares([1,2,1,1,1,1,1,0,1,1,1])

