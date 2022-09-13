function estaEntre(numero,minimo,maximo,inclusivo=false){
    if (inclusivo)
        return numero>=minimo && numero<=maximo?true:false
    else
        return numero>minimo && numero<maximo?true:false
}

console.log(estaEntre(90,50,100))
console.log(estaEntre(10,100,160))
console.log(estaEntre(3,3,150))
console.log(estaEntre(3,3,150,true))