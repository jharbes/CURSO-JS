const listaString="10 20 40 35 18 3 65 33"
let array=listaString.split(" ")

for (i=0;i<array.length;i++)
    array[i]=Number(array[i])

console.log(array)


maior=array[0];menor=array[0]
let somaRecorde=0
let numeroPiorJogo=0

for (i=1;i<array.length;i++){
    if (array[i]>maior){
        maior=array[i];somaRecorde++
    }
    if (array[i]<menor){
        numeroPiorJogo=i;menor=array[i]
    }
}
console.log("o número de vezes em que você bateu seu recorde de pontos foi",somaRecorde,
"e o seu pior jogo foi o de número",numeroPiorJogo+1)