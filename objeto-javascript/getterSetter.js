const sequencia={
    _valor:1, // convenção de como fazer a variavel privada em JS

    get valor(){
        return this._valor
    },
    set valor(valor){
        if (valor>=0) // setter funcionando como um validador , impedindo que o atributo seja negativo.
            this._valor=valor
        else
            console.log('Valor não pode ser negativo')
    }
}

console.log(sequencia.valor) // ***quando utilizamos o nome 'valor' para o atributo o JS já entende que estamos na verdade solicitando o método get do objeto e retorna corretamente o atributo.

sequencia.valor=-5 // nao vai permitir pois o método setter está impedindo valores negativos.

sequencia.valor=1000 // *** da mesma maneira que o método getter, quando você atribui por meio do nome do método setter ele já entende que você deseja utilizar o método e  valida por esse nome.  

console.log(sequencia.valor)