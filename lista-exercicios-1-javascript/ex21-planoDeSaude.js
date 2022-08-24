const valorPago=(idade)=>{
    console.log(idade<10?'Valor a ser pago: R$180':(
        idade<=30?"Valor a ser pago: R$150":(
            idade<=60?"Valor a ser pago: R$195":"Valor a ser pago: R$230"
        )
    ))
}

valorPago(5)
valorPago(80)
valorPago(40)