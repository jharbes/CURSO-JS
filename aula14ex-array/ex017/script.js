function clicou(){
    var num=Number(document.querySelector('#num').value)
    console.log(num)

    if (document.querySelector('#num').value.length==0){
        window.alert("FAVOR DIGITAR UM NÚMERO!")
    }
    else{
        for (i=1;i<=10;i++){
            document.getElementsByTagName('option')[i-1].innerHTML=`${num}x${i}=${num*i}`
        }
    }   
}