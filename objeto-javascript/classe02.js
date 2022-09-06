class Avo{
    constructor(sobrenome){
        this.sobrenome=sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome,profissao='Professor'){
        super(sobrenome) // essa linha funciona copiando o corpo do construtor da classe pai, nesse caso ele adiciona a linha this.sobrenome=sobrenome ao construtor da classe Pai
        this.profissao=profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho=new Filho
console.log(filho)