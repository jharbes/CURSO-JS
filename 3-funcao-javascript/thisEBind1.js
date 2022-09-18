const pessoa={
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar=pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa=pessoa.falar.bind(pessoa) // com o bind nós atrelamos o objeto pessoa à funcao falar(), assim ele remete de maneira correta ao objeto.
falarDePessoa()

const falar2=pessoa.falar
falar2()