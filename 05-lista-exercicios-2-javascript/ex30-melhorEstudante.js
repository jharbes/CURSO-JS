function melhorEstudante(objeto){
    novoObjeto={}
    Object.entries(objeto).forEach(([chave,valor])=>{
        let soma=0
        for (i in valor)
            soma+=valor[i]
        novoObjeto[chave]=soma/valor.length
    console.log(novoObjeto)
    })
    novoObjeto2={teste:0}
    console.log(novoObjeto2.teste)
    Object.entries(novoObjeto).forEach(([chave,valor])=>{
        if (valor>=novoObjeto2.teste){
            novoObjeto2[chave]=valor
        }
    })
    return novoObjeto2
}

console.log(melhorEstudante({
    Joao:[8,7.6,8.9,6],
    Mariana:[9,6.6,7.9,8],
    Carla:[7,7,8,9]
}))