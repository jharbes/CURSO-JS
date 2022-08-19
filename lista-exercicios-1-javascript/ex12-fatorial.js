function fatorial(n){
    return n<=1?1:(n*(fatorial(n-1)))
}

console.log(fatorial(5))
console.log(fatorial(8))
console.log(fatorial(4))