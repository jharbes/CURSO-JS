var agora=new Date()
var hora=agora.getHours()



if (hora<12){
    document.getElementsByTagName('div')[0].innerHTML=`Bom dia, agora são ${hora} horas.`
    document.getElementsByTagName('div')[1].innerHTML=`<img src="oracoes-para-fazer-pela-manha.jpg" alt="FOTO DA MANHA">`
    document.getElementsByTagName('body')[0].style.backgroundColor='#ECC981'
}else if (hora<18){
    document.getElementsByTagName('div')[0].innerHTML=`Boa tarde, agora são ${hora} horas.`
    document.getElementsByTagName('div')[1].innerHTML=`<img src="mensagens-de-boa-tarde-ka0z3-fxl.webp" alt="FOTO DA TARDE">`
    document.getElementsByTagName('body')[0].style.backgroundColor='#BF7E78'
} else{
    document.getElementsByTagName('div')[0].innerHTML=`Boa noite, agora são ${hora} horas.`
    document.getElementsByTagName('div')[1].innerHTML=`<img src="depositphotos_64872759-stock-photo-full-moon-in-night-sky.jpg" alt="FOTO DA NOITE">`
    document.getElementsByTagName('body')[0].style.backgroundColor='#002154'
}