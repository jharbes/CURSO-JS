// ES8: Object.values/Object.entries    
const obj={a:1,b:2,c:3}
console.log(Object.values(obj)) // Retornará um array com os valores dos objetos em formato de array

console.log(Object.keys(obj)) // Retornará um array com as chaves do objeto em formato de array

console.log(Object.entries(obj)) // Retornará o par chave/valor em formato de array, onde cada elemento do array será um array com cada um dos pares chave/valor

// Melhorias na notação literal
const nome='Carla'
const pessoa={
    nome, // antes seria necessario colocar nome:nome
    ola(){ // antes seria necessario colocar ola: function(){   }
        return 'Oi gente!'
    }
}

console.log(pessoa.nome,pessoa.ola())

// Classes
class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())