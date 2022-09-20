const contaNegativos=(vetor)=>{
    quantosNegativos=0
    for (i in vetor)
        if (vetor[i]<0){quantosNegativos++}
    console.log('A quantidade de números negativos desse vetor é de '+quantosNegativos+'.\n')
}

contaNegativos([1,2,3,4])
contaNegativos([-2,2434,435,-1,6,-0.5])