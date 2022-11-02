/*

Ao se comparar se uma string é maior que outra, considera-se a ordem alfabética ou lexicográfica. No caso, “abcd” < “adbc” < “bacd”.

Escreva uma função que receba uma string A e retorne uma string B, sendo que B é composta pelos mesmos caracteres que A reordenados.

B deve obedecer às seguintes condições:

Ser maior que A
Ser a menor string possível que cumpra as condições acima
Caso não seja possível encontrar uma string que cumpra as condições, retorne a string “sem reposta”.
Por exemplo:

A = “ab”
Logo, o resultado será “ba”

A = “abcde”
Logo, o resultado será “abced”

A = “ba”
Nesse caso, o resultado será “sem resposta"

*/

function menorStringMaior(name) {
    console.log(name)
    let numChar=name.length
    console.log(numChar)
    let arrayName=Array.from(name)
    let newString=name

    while (newString<=name){
        newString[numChar-2],newString[numChar-1]=newString[numChar-1],newString[numChar-2]
        numChar--
        console.log(newString)
    }

    console.log(newString)

    console.log(arrayName)
    console.log(typeof arrayName)

    console.log(newString>name,"abced">"abcde")
    if (newString>name)
        return newString
    else
        return "sem resposta"
}

menorStringMaior("abcde")
console.log(menorStringMaior("abcde"))