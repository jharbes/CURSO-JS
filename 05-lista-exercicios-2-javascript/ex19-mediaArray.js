function mediaArray(array){
    let soma=0
    for (i in array)
        soma+=array[i]
    return soma/array.length
}

console.log(mediaArray([0,10]))
console.log(mediaArray([1,2,3,4,5]))