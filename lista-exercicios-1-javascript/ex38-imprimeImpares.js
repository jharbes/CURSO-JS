const imprimeImpares=function (inicio=0,fim=100){
    if (inicio<=fim){
        for (i=inicio;i<=fim;i++){
            if (i%2!=0)
                console.log(i)
        }
    }else{
        for (i=fim;i<=inicio;i++){
            if (i%2!=0)
                console.log(i)
        }
    }
    console.log("\n\n")
}

imprimeImpares()
imprimeImpares(0,20)
imprimeImpares(10,1)