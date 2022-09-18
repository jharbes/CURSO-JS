// Aqui estamos exemplificando a criacao da funcao MAP com o nome MAP2 para saber como ela funciona internamente

Array.prototype.map2=function(callback){
    const newArray=[]
    for (let i=0; i<this.length;i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}

const carrinho=[
    '{"nome":"Borracha","preco":3.45}',
    '{"nome":"Caderno","preco":13.90}',
    '{"nome":"Kit de Lapis","preco":41.22}',
    '{"nome":"Caneta","preco":7.50}'
]

// DESAFIO: Retornar um array apenas com os precos

// Minha solucao:

let carrinho1=carrinho.map2(e=>JSON.parse(e)).map2(e=>e.preco)
console.log(carrinho1)

// Solucao professor:

const paraObjeto=json=>JSON.parse(json)
const apenasPreco=produto=>produto.preco

const resultado=carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)