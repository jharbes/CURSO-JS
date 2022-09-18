const aprovados=['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome,indice){
    console.log(`${indice+1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

// Abaixo passamos a constante como função depois como constante para ser passada no for each
const exibirAprovados=aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)

// *** IMPORTANTE, se você quiser ter acesso apenas ao índice no foreach você tera que indicar o valor antes na função (sempre será o primeiro parametro), exemplo: (nome,indice), e ai utilizar apenas o indice no corpo da funcao

// *** IMPORTANTE 2, o terceiro parâmetro do foreach (nao utilizado nos exemplos acima) é o array inteiro, entao podemos utilizar os parametros (nome,indice,array) <===