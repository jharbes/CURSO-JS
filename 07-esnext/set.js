// nao aceita repeticao/nao indexada
const times=new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // nao aceita adição de elemento repetido

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) // false, pois é case sensitive
console.log(times.has('Vasco')) // true

times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes=['Raquel','Lucas','Julia','Lucas']
const nomesSet=new Set(nomes) // retira os elementos repetidos pois o set é uma estrutura que nao aceita repetição

console.log(nomesSet)