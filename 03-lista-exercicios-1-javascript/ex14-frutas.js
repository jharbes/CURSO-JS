const bancaDeFrutas=(fruta)=>{
    fruta=fruta.toLowerCase().replace(/\s+/g, '').replace("ç","c").replace("ã","a")
    switch (fruta){
        case 'maca':
            console.log('Não vendemos essa fruta aqui.')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis.')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo.')
            break
        default:
            console.log("Fruta não localizada.")
    }
}

bancaDeFrutas(' Maçã')
bancaDeFrutas('maca')
bancaDeFrutas('  KIWI')
bancaDeFrutas('Melancia')