const arrayRepeticao=(elemento,numero)=>{
    let vetor=[]
    for (i=0;i<numero;i++)
        vetor.push(elemento)
    return vetor
}

console.log(arrayRepeticao("código",2))
console.log(arrayRepeticao(7,3))