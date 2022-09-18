function Carro(velocidadeMaxima=200,delta=5){
    // atributo privado
    let velocidadeAtual=0

    // atributo publico
    this.cor

    // metodo publico
    this.acelerar=function(){
        if (velocidadeAtual+delta<=velocidadeMaxima)
            velocidadeAtual+=delta
        else
            velocidadeAtual=velocidadeMaxima
    }

    // metodo publico
    this.getVelocidadeAtual=()=>{
        return velocidadeAtual
    }
}

const uno=new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari=new Carro(350,20)
ferrari.cor='vermelho'
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
console.log(ferrari)

console.log(typeof Carro)
console.log(typeof ferrari)