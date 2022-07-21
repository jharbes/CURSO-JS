const [a]=[10]
console.log(a)

const [n1, ,n3, ,n5,n6=0]=[10,7,9,8] // Nesse caso criaremos as variaveis n1,n3,n5 e n6
                                    //cada um recebera o valor respectivo de acordo com a ordem. Ex: n1=10 n3=9 n5=undefined e n6=0, observe:

console.log(n1,n3,n5,n6)

const [ ,[ ,nota]]=[[ ,8,8],[9,6,8]] // Aqui ele ignora o primeiro elemento do array que eh o array [ ,8,8], e no segundo elemento que tambem eh um array ele ignora o primeiro 
                                    // o primeiro elemento do array e busca apenas o segundo elemento do segundo array que eh igual a 6.

console.log(nota)