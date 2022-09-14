const buscaPalavrasSenelhantes=(palavra,array)=>{
    let vetorResultado=[]
    for (i in array){
        if ((array[i].split(palavra).length-1)>=1)
            vetorResultado.push(array[i])
    }
    return vetorResultado
}

console.log(buscaPalavrasSenelhantes("pro",["programação","mobile","profissional"]))
console.log(buscaPalavrasSenelhantes("python",["javascript","java","c++"]))