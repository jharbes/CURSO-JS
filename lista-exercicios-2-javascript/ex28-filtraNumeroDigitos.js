const filtraNumeroDigitos=(array,numero)=>{
    let newArray=[]
    for (i in array){
        array[i]=Math.abs(array[i])
        if (array[i]>=10**(numero-1) && array[i]<10**numero)
            newArray.push(array[i])
    }
    return newArray
}

console.log(filtraNumeroDigitos([38,2,365,10,125,11],2))
console.log(filtraNumeroDigitos([5,9,1,125,11],1))


console.log(filtraNumeroDigitos([-38,2,365,-10,125,0,11],2))