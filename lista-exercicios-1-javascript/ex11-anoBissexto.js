const ehBissexto=function (ano){
    return ano%4!=0?false:(ano%400==0?true:(ano%100==0?false:true))
}

console.log(ehBissexto(1986))
console.log(ehBissexto(1992))
console.log(ehBissexto(2000))
console.log(ehBissexto(1900))