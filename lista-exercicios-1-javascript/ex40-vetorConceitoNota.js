function conceitoNotas(vetor){
    let vetorConceito=[]
    for (i in vetor){
        if (vetor[i]>=0 && vetor[i]<5)
            vetorConceito[i]='D'
        else if (vetor[i]>=5 && vetor[i]<7)
            vetorConceito[i]='C'
        else if (vetor[i]>=7 && vetor[i]<9)
            vetorConceito[i]='B'
        else if (vetor[i]>=9 && vetor[i]<=10)
            vetorConceito[i]='A'
        else
            vetorConceito[i]='CONCEITO INEXISTENTE'
    }
    console.log(vetorConceito)
}

conceitoNotas([4,10,8.6,4.3,11])