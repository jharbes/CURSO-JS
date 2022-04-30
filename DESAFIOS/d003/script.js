var a=document.getElementsByTagName('button')[0]

a.addEventListener('click',clicou)

function clicou(){
    n=Number(window.prompt("Digite um número inteiro qualquer."))
    window.alert(`Antes de ${n}, temos o número ${n-1}.\nDepois de ${n}, temos o número ${n+1}.`)
}