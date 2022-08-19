const calculadora=(a,op,b)=>{
    switch (op){
        case '+':
            return a+b
            break
        case '-':
            return a-b
            break
        case '*':
            return a*b
            break
        case '/':
            return a/b
            break
        default:
            return 'Operação inválida.'
    }
}

console.log(calculadora(5,'*',6))
console.log(calculadora(4,'#',2))
console.log(calculadora(67,'-',5))