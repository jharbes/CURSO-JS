

function calculaAprovacao(codigo,nota1,nota2,nota3){
    if (codigo>=0){
        let nota=[nota1,nota2,nota3]
        nota.sort((a,b)=>a-b)
        media=(nota[0]*3+nota[1]*3+nota[2]*4)/10
        console.log('ALUNO CÓDIGO: '+codigo)
        console.log('NOTA 1: '+nota1)
        console.log('NOTA 2: '+nota2)
        console.log('NOTA 3: '+nota3)
        console.log('MÉDIA: '+media)
        console.log(media>5?'STATUS: APROVADO':'STATUS: REPROVADO')
    }
}

calculaAprovacao(5428,10,5,8)
calculaAprovacao(1224,6,2,3)