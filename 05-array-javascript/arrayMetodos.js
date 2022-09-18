const pilotos=['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento na ultima posicao do vetor, aumentando assim seu tamanho
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do vetor(indice 0), reduzindo assim seu tamanho
console.log(pilotos)

pilotos.unshift('Hamilton') // Unshift adiciona um elemento no inicio do vetor(indice 0), consequentemente aumentando o seu tamanho e rearranjando os valores em seus novos índices
console.log(pilotos)

// Utilizando o método splice que foi falado no exercício anterior no arquivo array.js

pilotos.splice(2,0,'Bottas','Massa') // Nesse caso, no espaço do elemento 2, sem excluir nenhum, vamos adicionar os elementos "Bottas" e "Massa", observe o resultado
console.log(pilotos)

// Removendo com o método splice
pilotos.splice(3,1) // Na posição 3, removeremos apenas um elemento, veja o resultado:
console.log(pilotos)

const algunsPilotos1=pilotos.slice(2) // Esse método retorna um novo vetor a partir da posição indicada(2), colocando essa posiçao inclusive, observe:
console.log(algunsPilotos1)

const algunsPilotos2=pilotos.slice(1,4) // Agora observe que o novo array será a partir da posição 1, até a posição 4, mas nao incluirá essa última, na verdade será apenas ate o 3
console.log(algunsPilotos2)