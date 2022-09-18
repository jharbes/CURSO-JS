// Object.preventExtensions

const produto=Object.preventExtensions({ // impede que o objeto seja extensível, ou seja, receba novos atributos, embora ainda possa ser possível deletar atributos nesse caso
    nome:'Qualquer',preco:1.99,tag:'promoção'
})
console.log('Extensível:',Object.isExtensible(produto))

produto.nome='Borracha'
produto.descricao='Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal

const pessoa={nome:'Juliana',idade:35} 
Object.seal(pessoa) // O seal faz com que não seja possível excluir atributos e nem adicionar novos atributos ao objeto, no entanto permite alterar os atributos existentes.
console.log('Selado:',Object.isSealed(pessoa))

pessoa.sobrenome='Silva'
delete pessoa.nome
pessoa.idade=29

console.log(pessoa) // observa-se que foi possivel alterar o atributo existente (idade), no entanto nao foi possivel nem deletar o atributo nome, sequer adicionar o novo atributo sobrenome

// Object freeze = selado mais valores constantes (nao pode alterar valores, nem adicionar atributos ou excluir atributos)