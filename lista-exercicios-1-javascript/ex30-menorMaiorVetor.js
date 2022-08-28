const menorMaior=function (vetor){
    maior=vetor[0];menor=vetor[0]
    for (i in vetor){
        if (vetor[i]>maior){maior=vetor[i]}
        if (vetor[i]<menor){menor=vetor[i]}
    }
    console.log("O maior elemento do vetor é o elemento",maior)
    console.log("O menor elemento do vetor é o elemento",menor,"\n")
}

menorMaior([22,3,1,6,4,890,12324,-8])
menorMaior([10,5,6,3434,-1,0])