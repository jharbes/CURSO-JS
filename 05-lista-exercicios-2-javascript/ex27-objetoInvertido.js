const inverteObjeto=(objeto)=>{
    novoObjeto={}
    Object.entries(objeto).forEach(([chave,valor])=>{
            novoObjeto[valor]=chave
    })
    return novoObjeto
}

console.log(inverteObjeto({a:1,b:2,c:3}))