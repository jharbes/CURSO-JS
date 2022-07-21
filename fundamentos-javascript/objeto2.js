// new Object e new Object() em JS tem o mesmo significado, funciona como um contrutor.

console.log(typeof Object)
console.log(typeof new Object)
console.log(typeof new Object())

console.log("")

const Cliente=function(){}

console.log(typeof Cliente)
console.log(typeof new Cliente)

console.log("")

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto())