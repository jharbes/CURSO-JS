// par nome valor
const saudacao="opa" // contexto lexico 1

function exec(){
    const saudacao="falaaaa" // contexto lexico 2
    return saudacao
}

console.log(saudacao)
console.log(exec())

const cliente={
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}
console.log(cliente)

