/* let dobro=function (a){
    return 2*a
}
*/

dobro=(a)=>{
    return 2*a
}

console.log(dobro(2))
console.log(dobro)

dobro=a=> 2*a // funciona pra quando possui uma unica linha a funcao, o return esta presente como a funcao acima, mas esta implicito.

let ola=function (){
    return 'Olá'
}

ola=()=> "Olá"
ola= _ => "Olá" // Aqui a funcao possui um parametro (_), no entanto ela funciona pois o JS roda mesmo que nao hajam parametros passados para funcoes que tem parametros.

console.log(ola())