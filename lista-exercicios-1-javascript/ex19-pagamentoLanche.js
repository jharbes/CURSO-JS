const pagLanche=(codigo,qtde)=>{
    switch(codigo){
        case 100:
            console.log("Valor a ser pago: R$",3.00*qtde)
            break
        case 200:
            console.log("Valor a ser pago: R$",4.00*qtde)
            break
        case 300:
            console.log("Valor a ser pago: R$",5.50*qtde)
            break
        case 400:
            console.log("Valor a ser pago: R$",7.50*qtde)
            break
        case 500:
            console.log("Valor a ser pago: R$",3.50*qtde)
            break
        case 600:
            console.log("Valor a ser pago: R$",2.80*qtde)
        default:
            console.log("Código de produto inexistente.")
    }
}

pagLanche(100,4)
pagLanche(300,3)
pagLanche(450,2)