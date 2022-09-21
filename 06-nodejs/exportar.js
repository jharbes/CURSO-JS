console.log(this===module.exports)
console.log(module.exports===exports)

this.a=1 // agora será visivel fora do arquivo
exports.b=2 // também ficará visível fora do arquivo
module.exports.c=3

exports=null
console.log(module.exports)

exports={
    nome:'teste'
}

console.log(module.exports)

module.exports={publico:true}