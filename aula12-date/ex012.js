var agora=new Date()
var hora=agora.getHours()

console.log(`Agora são ${agora}.`)
console.log(`São ${hora} horas.`)
console.log(`A data de hoje é ${agora.getDate()}/${agora.getMonth()}/${agora.getFullYear()}.`)


var data = new Date();
var dia = String(data. getDate()). padStart(2 ,'0');
var mes = String(data. getMonth() + 1). padStart(2, '0');
var ano = data. getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;
console.log(dataAtual);