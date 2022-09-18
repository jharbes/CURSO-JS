const notas=[6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) // o que irá correr no for serão os índices do vetor e não os elementos em si.
    console.log(i,notas[i])

const pessoa={
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa)
    console.log(`${atributo}=${pessoa[atributo]}`) // nesse caso o for in corre os atributos, na ordem e pelo nome

