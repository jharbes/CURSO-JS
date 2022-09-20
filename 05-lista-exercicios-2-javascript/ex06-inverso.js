const inverso=(entrada)=>{
    if (!!entrada==entrada)
        return !entrada
    else if (entrada===+entrada)
        return -entrada
    else
        return "Booleano ou número esperados, mas o parâmetro é do tipo "+typeof entrada+"."
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programação"))