// Coleção dinâmica de pares chave/valor

const produto=new Object

const produto2={nome: 'Açucar',tipo: 'Alimento',preco:500}

produto.nome='Cadeira'
produto['marca do produto']='Generica' // outra maneira de criar dinamicamente o atributo e seu valor em JS
produto.preco=220

console.log(produto)

delete produto.preco // Excluindo o atributo do objeto
delete produto['marca do produto']

console.log(produto)
console.log(produto2)

// Observe no exemplo abaixo o objeto carro que pode ter objetos como valores de seus atributos
const carro={
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 55
        }
    }, // observe o atributo condutores, nele estamos incluindo um array de objetos como valor desse atributo
    condutores:[{
        nome: 'Junior',
        idade: 19
    },{
        nome:'Ana',
        idade:42
        }
    ],
    calcularValorSeguro: function(){
        // ...
    }
}

console.log(carro)

carro.proprietario.endereco.numero=1000
carro['proprietario']['endereco']['logradouro']='Avenida Gigante'

console.log(carro)

delete carro.condutores
console.log(carro)

delete carro.proprietario.endereco
console.log(carro)

delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)