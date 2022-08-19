const notaFinal=(nota)=>{
    return nota<38?nota:(
        nota%5<3?nota:(nota%5==4?nota+1:nota+2)
    )
}

console.log(notaFinal(48))