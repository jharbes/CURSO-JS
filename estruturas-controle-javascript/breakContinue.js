// Ambos os comandos causam desvio, cada um da sua maneira, segue abaixo como:

const nums=[1,2,3,4,5,6,7,8,9,10]

for (x in nums){
    if (x==5){ // Aqui queremos demonstrar que o break nao cancela o bloco if, mas sim o bloco for entao esse bloco for sera cancelado por ser o mais proximo dele, ou seja, ele sai do laço for imediatamente.
        break
    }
    console.log(`${x}=${nums[x]}`)
}

for (y in nums){
    if (y==5){ // Diferente do break, o continue volta pra estrutura onde se encontra sem finalizar o presente laço
        continue
    }
    console.log(`${y}=${nums[y]}`)
}

externo:
    for (a in nums){
        for (b in nums){
            if (a==2 && b==3) break externo // chama-se rotulo esta chamada, o break sozinho apenas colocaria para fora do for interno, entao usamos o rotulo pra que na verdade ele lance pra fora do for externo. Como se fossem dois breaks seguidos.
            console.log(`PAR=${a},${b}`)
        }
    }