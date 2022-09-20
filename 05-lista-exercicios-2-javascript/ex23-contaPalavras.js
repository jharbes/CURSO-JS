const contaPalavras=function(string){
    return (string.match(/\ /g) || []).length+1
}

console.log(contaPalavras("Sou uma frase"))
console.log(contaPalavras("Me divirto aprendendo a programar"))