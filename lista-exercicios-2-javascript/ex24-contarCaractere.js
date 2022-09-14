function contarCaractere(caractere,string){
    return string.split(caractere).length-1
}

console.log(contarCaractere("r","A sorte favorece os audazes"))
console.log(contarCaractere("c","Conhece-te a ti mesmo"))