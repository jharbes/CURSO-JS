const tipoTriangulo=(a,b,c)=>{
    if (a==b && b==c)
        console.log(`Triângulo equilátero.`)
    else if (a==b || b==c)
        console.log(`Triângulo Isósceles.`)
    else
        console.log(`Triângulo escaleno.`)
}

tipoTriangulo(4,5,6)
tipoTriangulo(2,2,2)
tipoTriangulo(2,3,3)