const removerAtributo=(objeto,atributo)=>{
    delete objeto[atributo]
    return objeto
}

console.log(removerAtributo({a:1,b:2},"a"))
console.log(removerAtributo({id:20,nome:'Caneta',descricao:'Não preenchido'},"descricao"))