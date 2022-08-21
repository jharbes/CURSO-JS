//

function criarProduto(nome,preco){
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Vassoura',25))
console.log(criarProduto(`Notebook`,2500.99))