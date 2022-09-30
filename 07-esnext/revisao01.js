// let e const

// let possui escopo de funcao e de bloco, var possui apenas escopo de funcao

{
    var a=2
    let b=3
    console.log(b)
}
console.log(a)

// Template string
const produto='IPad'
console.log(`${produto} 
é 
caro!`)

// Destructuring
const [l,e,...tras]='Cod3r'
console.log(l,e,tras)

const [x, ,y]=[1,2,3]
console.log(x,y)

const {idade:i,nome}={nome:'Ana',idade:9}
console.log(i,nome)