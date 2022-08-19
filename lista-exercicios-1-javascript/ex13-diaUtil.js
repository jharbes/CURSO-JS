const diaUtil=(dia)=>{
    switch (dia){
        case 1: case 7:
            console.log('Não é dia útil')
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log('É dia útil')
            break
        default:
            console.log('Digite um dia válido')
    }
}

diaUtil(1)
diaUtil(2)
diaUtil(5)
diaUtil(7)