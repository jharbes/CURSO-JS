function soma(){
    let soma=0
    for (i in arguments)
        soma+=arguments[i]
    return soma
}

/* Aqui embora a função tenha sido declarada de forma a não receber nenhum argumento ela
pode receber, pois internamente ela contabiliza todos os parametros passados dentro desse
array chamado arguments, sendo assim podemos usá-los se forem passados, mesmo que a função
inicialmente não admita uso de argumentos */

console.log(soma())
console.log(soma(1))
console.log(soma(4,5,6,8))
console.warn(soma(1,2,3,'teste')) // Neste caso ele somou um a um os elementos e no final concatenou a string

console.log(soma('a',"b",`c`))

