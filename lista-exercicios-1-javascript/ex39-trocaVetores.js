const trocaVetores=(vetor1,vetor2)=>{
    if (vetor1.length==vetor2.length){
        for (i in vetor1){
            vetor1[i]=vetor1[i]+vetor2[i]
            vetor2[i]=vetor1[i]-vetor2[i]
            vetor1[i]=vetor1[i]-vetor2[i]
        }
    }else{
        console.log("Não foi possível efetuar a troca, tamanho dos vetores diferente.")
    }
}

array1=[1,2,3,4,5]
array2=[6,7,8,9,10]

trocaVetores(array1,array2)

console.log(array1)
console.log(array2)

