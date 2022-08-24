const novoSalario=(plano,salario)=>{
    plano=plano.toLowerCase()
    switch(plano){
        case 'a':
            console.log(`Seu novo salário será R$${salario*1.1}.`)
            break
        case 'b':
            console.log(`Seu novo salário será R$${salario*1.15}.`)
            break
        case 'c':
            console.log(`Seu novo salário será R$${salario*1.2}.`)
            break
        default:
            console.log(`Tipo de plano inválido!`)
    }
}

novoSalario('A',10000)
novoSalario('b',5000)
novoSalario('c','er')