const carrinho=[
    '{"nome":"Borracha","preco":3.45}',
    '{"nome":"Caderno","preco":13.90}',
    '{"nome":"Kit de Lapis","preco":41.22}',
    '{"nome":"Caneta","preco":7.50}'
]

// DESAFIO: Retornar um array apenas com os precos

// Minha solucao:

let carrinho1=carrinho.map(e=>JSON.parse(e)).map(e=>e.preco)
console.log(carrinho1)

// Solucao professor:

const paraObjeto=json=>JSON.parse(json)
const apenasPreco=produto=>produto.preco

const resultado=carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)