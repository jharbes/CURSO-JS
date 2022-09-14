const anoBissexto=(ano)=>{
    return console.log(ano%4!=0?"NÃO É BISSEXTO":(ano%100==0 && ano%400==0?"É BISSEXTO":(ano%100==0?"NÃO É BISSEXTO":"É BISSEXTO")))
}

anoBissexto(2020)
anoBissexto(2100)
anoBissexto(1983)
anoBissexto(1981)
anoBissexto(2028)
anoBissexto(1900)