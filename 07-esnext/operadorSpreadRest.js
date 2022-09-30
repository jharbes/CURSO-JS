// operador ... rest(juntar)/spread espalhar
// usar rest como parametro de funcao (abordado no arquivo revisao02.js)

// usar spread com objeto
const funcionario={nome:'Maria',salario:12348.99}
const clone={ativo:true,...funcionario} // adicionou os atributos e valores do objeto funcionario
console.log(clone)

// usar spread com array
const grupoA=['João','Pedro','Glória']
const grupoFinal=['Maria',...grupoA,'Rafaela']
console.log(grupoFinal) // adicionou os elementos do vetor grupoA ao vetor grupoFinal na posicao desejada