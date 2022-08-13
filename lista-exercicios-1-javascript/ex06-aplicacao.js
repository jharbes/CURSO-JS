const jurosSimples=(capital,taxa,tempo)=>{
    return capital+capital*taxa/100*tempo
}
console.log(jurosSimples(1000,10,5))

const jurosCompostos=(capital,taxa,tempo)=>{
    return capital*(1+taxa/100)**tempo
}
console.log(jurosCompostos(1000,10,5).toFixed(2))