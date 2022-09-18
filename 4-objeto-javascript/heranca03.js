const pai={nome: 'Pedro',corCabelo:'preto'}

const filha1=Object.create(pai) // Cria o objeto filha herdando todos os atributos/valores do objeto protótipo 'pai'

console.log(filha1) // observe que nao mostra os valores quando sao herdados ao imprimir diretamente o objeto filha1
console.log(filha1.nome) // observe também que cada um dos atributos isoladamente estão presentes embora ao imprimir o objeto filha1 eles não estivessem aparecendo
console.log(filha1.corCabelo)
filha1.nome='Ana'

const filha2=Object.create(pai,{
    nome:{value: 'Bia', writable:false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome='Carla'
console.log(`${filha2.nome} tem cabelo da cor ${filha2.corCabelo}`) // observe que não conseguimos efetuar a mudança do atributo nome pois ele foi setado como writable:false

console.log(Object.keys(filha1));console.log(Object.keys(filha2))

for (let key in filha2)
    filha2.hasOwnProperty(key)?console.log(key):console.log(`Por herança: ${key}`)

    