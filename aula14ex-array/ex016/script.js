var btn=document.querySelector('button')
btn.addEventListener('click',clicou)

function clicou(){
    var ini=Number(document.querySelector('#ini').value)
    var fim=Number(document.querySelector('#fim').value)
    var passo=Number(document.querySelector('#pas').value)

    if (document.querySelector('#ini').value.length==0 || document.querySelector('#fim').value.length==0 || document.querySelector('#pas').value.length==0 || passo==0 || (ini>fim && passo>0) || (ini<fim && passo<0)){
        document.querySelector('div').innerHTML=`DADOS INCORRETOS! FAVOR PRÊENCHE-LOS ADEQUADAMENTE`
    }
    else {
        document.querySelector('div').innerHTML=`Contando: <br>`
        if (passo>0){
            for (i=ini;i<=fim;i+=passo){
                document.querySelector('div').innerHTML+=`${i} &#128073	`
            }
        }
        else {
            for (i=ini;i>=fim;i+=passo){
                document.querySelector('div').innerHTML+=`${i} &#128073	`
            }
        }
        document.querySelector('div').innerHTML+=`&#127988`
        console.log(ini+fim+passo)
    }
}