const semprePares=function(vetor){
    let vetorRetorno=[]
    for (i in vetor){
        if (i%2==0 && vetor[i]%2==0)
            vetorRetorno.push(vetor[i])
    }
    return vetorRetorno
}

console.log(semprePares([1,2,3,4]))
console.log(semprePares([10,70,22,43]))