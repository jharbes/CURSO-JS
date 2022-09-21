const moduloA=require('../../moduloA')

// o caminho do diretorio acima também pode ser utilizado com copy path:
// const moduloA=require('C:\Users\Jorge\Desktop\Udemy\WEB-MODERNO-COM-JS\06-nodejs\moduloA.js')
// Essa última maneira não é tão interessante porque caso vá implantar o sistema em outra máquina pode causar problema pois o caminho será diferente

console.log(moduloA.ola)

const saudacao=require('saudacao')
console.log(saudacao.ola)

const c=require('./pastaC/index')
console.log(c.ola2)

const http=require('http')
http.createServer((req,res)=>{
    res.write('Bom dia!')
    res.end()
}).listen(8080)