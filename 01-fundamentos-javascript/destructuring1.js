// Destructuring eh um novo recurso do ECMAScript 2015

const pessoa={
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome,idade}=pessoa // Uma maneira de retirar o valor dos atributos do objeto pessoa e atribuir a uma variavel/constante

console.log(nome)
console.log(idade)

console.log(pessoa)

const {nome:n,idade:i}=pessoa // Diferente do exemplo acima, aqui conseguimos retirar os valores dos atributos passando eles para variaveis de nomes diferentes.
console.log(n,i)

const {sobrenome,bemHumorada=true}=pessoa // Aqui vamos demonstrar que ao tentar retirar o valor de um atributo que nao existe teremos o retorno de undefined, ou entao podemos setar um valor padrao caso esse valor nao seja localizado(segunda opcao, onde o valor padrao sera true.)
console.log(sobrenome,bemHumorada)

const {endereco}=pessoa // aqui extraimos os valores do atributo endereco, o retorno sera um objeto
console.log(endereco,typeof endereco)

const {endereco:{logradouro,numero,cep}}=pessoa // aqui extraimos os valores dos atributos internos de endereco
console.log(logradouro,numero,cep)
console.log(typeof logradouro,typeof numero,typeof cep)