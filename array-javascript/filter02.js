// Aqui estamos exemplificando a criacao da funcao FILTER com o nome FILTER2 para saber como ela funciona internamente

Array.prototype.filter2=function(callback){
    const newArray=[]
    for (let i=0;i<this.length;i++){
        if (callback(this[i],i,this))
            newArray.push(this[i])
    }
    return newArray
}

const produtos=[
    {nome:'Notebook',preco:2499,fragil:true},
    {nome:'iPad Pro',preco:4199,fragil:true},
    {nome:'Copo de Vidro',preco:12.49,fragil:true},
    {nome:'Copo de Plastico',preco:18.99,fragil:false}
]


// DESAFIO: minha solucao
let produtos3=produtos.filter2(p=>(p.fragil==true && p.preco>=500))
console.log(produtos3)

// DESAFIO: solucao do professor
const caro=produto=>produto.preco>=500
const fragil=produto=>produto.fragil
let produtos4=produtos.filter2(caro).filter2(fragil)
console.log(produtos4)