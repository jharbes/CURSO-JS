var lista=[]
var fim=false

console.log(lista.length)

var btn1=document.getElementsByTagName('button')[0]
btn1.addEventListener('click',adicionar)

var btn2=document.getElementById('fim')
btn2.addEventListener('click',finalizar)

function adicionar(){
    if (fim==true){
        document.querySelector('#resultado').innerHTML=null
        fim==false
    }
    if (document.querySelector('#num').value.length==0 || document.querySelector('#num').value<1 || document.querySelector('#num').value>100 || repetido(document.querySelector('#num').value,lista)){
        window.alert('Preenchimento inválido ou número repetido! Favor tentar novamente!')
        document.querySelector('#num').value=''
        document.querySelector('#num').focus()
    }
    else {
        console.log(lista.indexOf(document.querySelector('#num').value))
        lista.push(Number(document.querySelector('#num').value))
        console.log(lista)
        let item=document.createElement('option')
        item.innerHTML=`Valor ${lista[(lista.length)-1]} adicionado.`
        document.getElementById('tab').appendChild(item)
        document.querySelector('#num').value=''
        document.querySelector('#num').focus()
    }
}

function finalizar(){
    if (lista.length==0){
        window.alert("Adicione valores antes de Finalizar!")
    }
    else {
        console.log('x')
        document.querySelector('#resultado').innerHTML=`<p>Ao todo temos ${lista.length} números cadastrados.</p>`
        document.querySelector('#resultado').innerHTML+=`<p>O maior valor informado foi ${maximo(lista)}.</p>`
        document.querySelector('#resultado').innerHTML+=`<p>O menor valor informado foi ${minimo(lista)}.</p>`
        document.querySelector('#resultado').innerHTML+=`<p>Somando todos os valores, temos ${total(lista)}.</p>`
        document.querySelector('#resultado').innerHTML+=`<p>A média dos valores digitados é ${soma/lista.length}.</p>`
        fim=true
        document.querySelector('#num').value=''
        document.querySelector('#num').focus()
    }
}
function maximo(array){
    let maior=array[0]
    for (i in array){
        if (array[i]>maior)
            maior=array[i]
    }
    return maior
}
function minimo(array){
    let menor=array[0]
    for (i in array){
        if (array[i]<menor)
            menor=array[i]
    }
    return menor
}
function total(array){
    soma=0
    for (i in array)
        soma+=array[i]
    return soma
}
function repetido(n,array){
    for (i in array){
        if (n==array[i])
            return true
    }
    return false
}