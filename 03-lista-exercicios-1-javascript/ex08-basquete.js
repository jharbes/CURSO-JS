const recordeComPiores=(listaString)=>{
    let array=listaString.split(" ")

    for (i=0;i<array.length;i++)
        array[i]=Number(array[i])

    maior=array[0];menor=array[0]
    let somaRecorde=0;let numeroPiorJogo=0

    for (i=1;i<array.length;i++){
        if (array[i]>maior){
            maior=array[i];somaRecorde++
        }
        if (array[i]<menor){
            numeroPiorJogo=i;menor=array[i]
        }
    }
    return [somaRecorde,numeroPiorJogo+1]
}
console.log("o número de vezes em que você bateu seu recorde de pontos foi",recordeComPiores("10 20 40 35 18 3 65 33")[0],
"e o seu pior jogo foi o de número",recordeComPiores("10 20 40 35 18 3 65 33")[1])

