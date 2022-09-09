// Método concat concatena os elementos dos array formando apenas um array com a soma dos elementos

const filhas=['Ualeskah','Cibalena']
const filhos=['Uoxinton','Uesclei']

const todos=filhas.concat(filhos)
console.log(todos)
console.log(filhas)
console.log(filhos)

// No exemplo abaixo concatenamos mais um elemento com a string 'Fulano'
const todos1=filhas.concat(filhos,'Fulano')
console.log(todos1)

console.log(['a','b'].concat([1,2],[3,4],5,[[6,7]]))