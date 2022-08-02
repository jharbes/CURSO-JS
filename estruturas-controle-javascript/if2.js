function teste1(num){
    if (num>7)
        console.log(num)
        console.log("Final") // Pra mostrar que quando não é utilizado a chaves apenas um comando será aceito por estrutura de controle.
}

teste1(6)
teste1(8)

function teste2(num){
    if (num>7);{ // cuidado com o ; - não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)