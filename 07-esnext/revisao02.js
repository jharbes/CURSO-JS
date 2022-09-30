// Arrow Function
// Possui retorno implicito quando não há corpo na função, se tiver corpo a declaracao 
// return torna-se obrigatório(caso seja desejado) caso seja desejado

const soma=(a,b)=>a+b
console.log(soma(2,3))

// Arrow Function (this)
const lexico1=()=>console.log(this===exports)
const lexico2=lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto='Node'){
    console.log(texto)
}

log()
log('Sou mais forte')

// operador rest - junta todos os parametros passados em uma estrutura
// do tipo ARRAY
function total(...numeros){
    let total=0
    numeros.forEach(n=>total+=n)
    return total
}
console.log(total(2,3,4,5,6,6,7)) // vai retornar a soma de qualquer quantidade de numeros que sejam passadas, que irao como um ARRAY