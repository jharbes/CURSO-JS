console.log(soma(2,3))

// function declaration - neste caso ocorre o hoisting (içamento) da funcao, ela pode ser chamada antes da declaração
function soma(x,y){
    return x+y
}

// function expression
const sub=function(x,y){
    return x-y
}
console.log(sub(3,4))

// named function expression
const mult=function mult(x,y){
    return x*y
}
console.log(mult(3,4))

