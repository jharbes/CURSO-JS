const retornaNumeros=(vetor)=>{
    let vetorRetorno=[]
    for (i in vetor){
        if (vetor[i]===+vetor[i])
            vetorRetorno.push(vetor[i])
    }
    return vetorRetorno
}

console.log(retornaNumeros(["Javascript",1,"3","web",20]))
console.log(retornaNumeros(["a","c"]))