const nums=[1,2,3,4,5]

// For com propósito, o map percorre o array e retorna um outro array de mesmo tamanho com valores de acordo com as instrucoes passadas. exemplo:
let resultado=nums.map((e)=>{ // os parametros da funcao sao, nesta ordem: valor do elemento do array, indice do elemento do array, array completo.
    return e*2
})
let resultado2=nums.map((e,i)=>{
    return i*2
})
console.log(resultado)
console.log(resultado2)

// *** IMPORTANTE: É importante observar que o map nao provoca alteracoes no array atual, ele cria um NOVO array com as modificacoes
console.log(nums)

// Abaixo o map utilizara o primeiro parametro(valor) em callback com cada uma das funcoes abaixo gerando um novo vetor após sucessivos calculos utilizando o vetor original nums que nao será alterado

const soma10=e=>e+10
const triplo=e=>e*3
const paraDinheiro=e=>`R$${parseFloat(e).toFixed(2).replace('.',',')}`

resultado=nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
console.log(nums)