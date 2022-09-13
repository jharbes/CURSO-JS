const multiplicar=function(x,y){
    let produto=0
    for (i=0;i<y;i++)
        produto+=x
    return produto
}

console.log(multiplicar(5,5))
console.log(multiplicar(0,7))