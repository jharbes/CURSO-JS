function calculaNumeroDaSenha(senha) {
    stringFinal=""
    for (let w=0;w<10;w++){
        numZeros=0
        numUms=0
        for (let i=0;i<senha.length;i++){
        if (senha[i].substring(w,w+1)=="1")
            numUms++
        else
            numZeros++
        }
        if (numUms>numZeros)
            stringFinal+="1"
        else if (numZeros>numUms)
            stringFinal+="0"
        else
            stringFinal+="1"
    console.log(stringFinal)
    }
    let bin = stringFinal
    let dec=0

    for (let c = bin.length - 1, i = 0; c >= 0; c--, i++) {
    dec += bin[c] * Math.pow(2, i);
    }

    return dec
}
1011010100

console.log(calculaNumeroDaSenha(["0110100000","1001011111","1110001010","0111010101","0011100110","1010011001","1101100100","1011010100","1001100111","1000011000"]))