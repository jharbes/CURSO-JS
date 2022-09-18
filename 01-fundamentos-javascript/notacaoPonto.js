console.log(Math.ceil(6.1))

const obj1={}

obj1.nome='Bola'
// obj1.['nome']='Bola'   <<- Funciona exatamente como o comando de cima pra criar atributos em objetos

console.log(obj1.nome)

function Obj(nome){
    this.nome=nome
}

const obj2=new Obj('Cadeira')
console.log(obj2)

const obj3=new Obj('mesa')
console.log(obj3.nome)