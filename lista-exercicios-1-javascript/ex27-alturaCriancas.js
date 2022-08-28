const comparaAlturas=function (altura1,taxa1,altura2,taxa2){
    if (altura1==altura2)
        console.log('Crianças com alturas iguais.')
    else{
        console.log(altura1>altura2?`Criança com ${altura1}cm de altura é a maior.`:`Criança com ${altura2}cm de altura é a maior.`)
        let anos=0
        
        if ((altura1>=altura2 && taxa1>=taxa2) || (altura2>=altura1 && taxa2>=taxa1))
            console.log('A criança menor nunca ultrapassará a maior.')
        else if (altura1>=altura2 && taxa1<taxa2){
            while (altura1*taxa1**anos>=altura2*taxa2**anos){
                anos++
            }
            console.log('A criança menor ultrapassará a maior em '+anos+' anos.')
        }
        else if (altura2>=altura1 && taxa2<taxa1){
            while(altura2*taxa2**anos>=altura1*taxa1**anos){
                anos++
            }
            console.log('A criança menor ultrapassará a maior em '+anos+' anos.')
        }
        else
            console.log('ERRO INESPERADO')
        console.log('')
    }
}

comparaAlturas(130,1.10,140,1.20)
comparaAlturas(120,1.08,150,1.02)
comparaAlturas(90,1.03,110,1.02)
comparaAlturas(110,1.4,110,1.2)