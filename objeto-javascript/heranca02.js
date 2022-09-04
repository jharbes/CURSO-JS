// Cadeira de protótipos (prototype chain)
Object.prototype.attr0='Z'
const avo={attr1:'A'}
const pai={__proto__:avo,attr2:'B',attr3:'3'}
const filho={__proto__:pai,attr3:'C'}

console.log(filho.attr1)
console.log(filho.attr0)
console.log(filho.attr2)
console.log(filho.attr3)

const carro={
    velAtual:0,
    velMax:200,
    aceleraMais(delta){
        if (this.velAtual+delta<=this.velMax)
            this.velAtual+=delta
        else
            this.velAtual=this.velMax
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari={
    modelo:'F40',
    velMax: 324 // "shadowing", como temos a velocidade máxima setada para esse objeto ele não puxará o valor do objeto pai 'carro'
}

const volvo={
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` // Nesse caso ele sobrescreverá o método status() do objeto protótipo efetuando alterações nele, no entanto ele efetuará mudanças, a referência "super" é pra deixar explicito que ele nao deseja a função status() do próprio objeto mas sim a do seu protótipo
    }
}

Object.setPrototypeOf(ferrari,carro) // Com esse comando estabelecemos que "ferrari" terá "carro" como seu protótipo
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo) // observe ao imprimir os objetos ferrari e volvo que nao aparecem os atributos herdados do protótipo embora eles lá estejam e possamos utilizá-los normalmente.

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())