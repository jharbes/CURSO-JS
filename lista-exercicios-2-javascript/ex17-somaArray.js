const somaArray=(array)=>{
    let soma=0
    for (i in array)
        soma+=array[i]
    return soma
}

console.log(somaArray([10,10,10]))
console.log(somaArray([15,15,15,15]))