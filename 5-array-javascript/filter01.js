const produtos=[
    {nome:'Notebook',preco:2499,fragil:true},
    {nome:'iPad Pro',preco:4199,fragil:true},
    {nome:'Copo de Vidro',preco:12.49,fragil:true},
    {nome:'Copo de Plastico',preco:18.99,fragil:false}
]

console.log(produtos.filter(p=>{
    return p.preco>2400
}))

let produtos1=produtos.filter(p=>p.fragil==true)
console.log(produtos1)

let produtos2=produtos.filter(p=>p.fragil==false)
console.log(produtos2)

// DESAFIO: minha solucao
let produtos3=produtos.filter(p=>(p.fragil==true && p.preco>=500))
console.log(produtos3)

// DESAFIO: solucao do professor
const caro=produto=>produto.preco>=500
const fragil=produto=>produto.fragil
let produtos4=produtos.filter(caro).filter(fragil)
console.log(produtos4)