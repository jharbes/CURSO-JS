// estrategia 1 para gerar valor padrao
function soma1(a,b,c){
    a=a || 1
    b=b || 1
    c=c || 1
    return a+b+c
}
console.log(soma1(),soma1(3),soma1(1,2,3))
console.log(soma1(0,0,0)) // No caso do (0,0,0) não funciona a estrategia pois o 0 sera lido como falso na operacao logica acima, logo o 1 sera considerado como o valor para cada uma das variaveis.

// estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a,b,c){
    a=a!==undefined?a:1
    b=1 in arguments?b:1 // Aqui perguntamos se existe o indice 1 em argumentos que seria o b, se existir ele assume b, se nao existir ele assume 1.
    c=isNaN(c)?1:c // Neste caso perguntamos se a variavel c nao eh um numero, se for o caso retorne 1 se nao for o caso retorne o proprio valor de c.
    return a+b+c
}

console.log(soma2(),soma2(3),soma2(1,2,3),soma2(0,0,0))

// valor padrao do es2015
function soma3(a=1,b=1,c=1){
    return a+b+c
}
console.log(soma3(),soma3(3),soma3(1,2,3),soma3(0,0,0))