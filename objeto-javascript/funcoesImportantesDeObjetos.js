// Funções/Métodos importantes de Objetos

const pessoa={
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // retorna as chaves/atributos do objeto (sem seu valor)

console.log(Object.values(pessoa)) // nesse caso é o inverso do de cima, em vez de retornar os atributos/chaves em si, ele retorna o valor dos atributos/valores

console.log(Object.entries(pessoa)) // retorna os pares chave/valor do objeto em formato de array onde cada elemento do array é um desses pares chave/valor

Object.entries(pessoa).forEach(e=>{
    console.log(`${e[0]}: ${e[1]}`)
})

// OU

Object.entries(pessoa).forEach(([chave,valor])=>{
    console.log(`${chave}:${valor}`)
})

Object.defineProperty(pessoa,'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento='01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


// Object.assign (ECMAScript 2015)

const dest={a:1} // objeto de destino
const o1={b:2}
const o2={c:3,a:4}
const obj=Object.assign(dest,o1,o2) // essa função vai incluir os pares chave/valor de o1 e o2 em dest, como dest já possui 'a' seu valor será sobrescrito com o valor de 'a' em 'o2'
console.log(dest)
console.log(obj)

Object.freeze(obj) // Congela os valores dos atributos dentro desse objeto impedindo que eles sejam alterados.
obj.c=1234
console.log(obj)