const despesasTotais=function(arrayObjeto){
    somaPreco=0
    for (i in arrayObjeto)
        somaPreco+=arrayObjeto[i].preco
    return somaPreco
}

console.log(despesasTotais([{nome:'Jornal Online',categoria:'Informação',preco:89.99},{nome:'Cinema',categoria:'Entretenimento',preco:150}]))

console.log(despesasTotais([{nome:'Galaxy S20',categoria:'Eletrônicos',preco:3599.99},{nome:'MacBook Pro',categoria:'Eletrônicos',preco:30999.90}]))