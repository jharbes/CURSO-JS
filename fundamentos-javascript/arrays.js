const valores=[7.7,8.9,6.3,9.2]

valores[4]=10

console.log(valores.length) // retorna o tamanho do vetor

valores.push({id: 3},false,null,'teste')
console.log(valores)

ultimo=valores.pop() // excluir o ultimo elemento do vetor
console.log(ultimo)
console.log(valores)

delete valores[0] // apaga o elemento de índice 0 do vetor
console.log(valores)