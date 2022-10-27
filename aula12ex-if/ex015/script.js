var a=document.getElementsByTagName('button')[0]
a.addEventListener('click',clicou)

var agora=new Date()
var anoAtual=agora.getFullYear()

function clicou(){
    var anoNasc=Number(document.getElementsByTagName('input')[0].value)
    if(anoNasc<=0 || anoNasc>anoAtual){
        document.getElementsByTagName('div')[2].innerHTML=`INFORMAÇÕES INVÁLIDAS, TENTE NOVAMENTE!`
        document.getElementsByTagName('div')[2].style.backgroundColor='red'
    } else {
        document.getElementsByTagName('div')[2].style.backgroundColor='white'
        var idade=anoAtual-anoNasc
        
        if (document.getElementById('mas').checked){
            document.getElementsByTagName('div')[2].innerHTML=`Detectamos Homem com ${idade} anos!<br>`
            if (idade<19)
                document.getElementsByTagName('div')[2].innerHTML+=`<img src="homemjovem.jpg" alt="Homem Jovem">`
            else if (idade<60)
                document.getElementsByTagName('div')[2].innerHTML+=`<img src="homemadulto.webp" alt="Homem Adulto">`
            else
                document.getElementsByTagName('div')[2].innerHTML+=`<img src="homemidoso.jpg" alt="Homem Idoso">`

        }
        else{
            document.getElementsByTagName('div')[2].innerHTML=`Detectamos Mulher com ${idade} anos!`
            if (idade<19)
                document.getElementsByTagName('div')[2].innerHTML+=`<img src="mulherjovem.jpg" alt="Mulher Jovem">`
            else if (idade<60)
                document.getElementsByTagName('div')[2].innerHTML+=`<img src="mulheradulta.jpg" alt="Mulher Adulta">`
            else
                document.getElementsByTagName('div')[2].innerHTML+=`<img src="mulheridosa.webp" alt="Mulher Idosa">`
        }
    }
}