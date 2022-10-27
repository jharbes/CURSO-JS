
function parimpar(n){
    if (n%2==0)
        return 'Par'
    else
        return 'Ímpar'
}

console.log(parimpar(12))

function soma(a=0,b=0){ // se nao passar parametro ele vai considerar como zero
    return a+b
}

console.log(soma(5,2))

let v=function(x){
    return x*2
}

console.log(v(5))

function fatorial(x){
    let fat=1
    while (x>1){
        fat*=x
        x--
    }
    return fat
}

console.log(fatorial(5))