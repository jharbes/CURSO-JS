console.log(typeof Array,typeof new Array,typeof [])

// Uma das maneiras de se criar array
let aprovados=new Array('Bia','Carlos','Ana')
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3]='Paulo' // pode ser usado para adicionar novos elementos ao array mas nao é o comum nem aconselhavel
aprovados.push('Abia') // metodo comum e aconselhavel para adicionar elementos ao array
console.log(aprovados.length) // metodo para retornar tamanho do array

aprovados[9]='Rafael' // Nesse caso quando adicionamos no indice 9 um elemento criamos tambem os elementos 4,5,6,7 e 8 no array, no entanto os valores vinculados a esses indices passa a ser o undefined como o exemplo abaixo:

console.log(aprovados.length) // passou a ter 10 elementos
console.log(aprovados[8]===undefined) // os elementos sem valor adicionado passaram a ser undefined

console.log(aprovados)

aprovados.sort() // Altera o array, nesse caso coloca os elementos em ordem alfabética
console.log(aprovados)

delete aprovados[1] // apaga o elemento do array mas não reordena o array, esse índice passará a ter o valor undefined
console.log(aprovados[1]) // ficou com o valor undefined
console.log(aprovados[2])

aprovados=['Bia','Carlos','Ana']
aprovados.splice(1,2) // esse método exclui os elementos a partir do primeiro número e por quantos índices estiverem escritos no segundo número
// observe que o splice excluir e reordena o vetor, de maneira diferente que o delete
console.log(aprovados)

aprovados=['Bia','Carlos','Ana']
aprovados.splice(1,2,'Elemento1','Elemento2')
console.log(aprovados) // observe aqui que diferente do exemplo anterior, dessa vez ele vai excluir dois elementos a partir do indice 1 e também adicionar os dois elementos que constam no fim do método

aprovados=['Bia','Carlos','Ana']
aprovados.splice(1,0,'Elemento1','Elemento2')
console.log(aprovados) // Dessa vez note que ele nao vai excluir nenhum elemento, mas a partir do elemento 1 ele vai adicionar dois elementos: Elemento1 e Elemento2