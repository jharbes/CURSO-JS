function compras(trabalho1,trabalho2){
    const comprarSorvete=trabalho1 || trabalho2
    const comprarTv50=trabalho1 && trabalho2
    // const comprarTv32=!!(trabalho1^trabalho2) // bitwise xor
    const comprarTv32=trabalho1 != trabalho2
    const manterSaudavel=!comprarSorvete // operador unário

    return {comprarSorvete,comprarTv50,comprarTv32,manterSaudavel} 
    
    /*  o retorno será feito por meio de um objeto, nesse caso o proprio js vai criar um par chave valor, ou seja, criar o atributo e o valor do atributo para esse objeto que está sendo criado, tipo {
                                            comprarSorvete: true,
                                            comprarTv50: true,
                                            comprarTv32: false,
                                            manterSaudavel: false
                                        } */
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))