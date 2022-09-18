isAtivo=true
console.log(isAtivo)

isAtivo=1
console.log(!!isAtivo)

console.log("Os verdadeiros...") // Abaixo todos os valores que podem ser convertidos em booleanos com o !!
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo=true))

console.log("")

console.log("os falsos:") // valores que podem ser convertidos em booleanos como falso com o !!
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log("")

console.log("pra finalizar...")
console.log(!!('' || null || 0 || ' '))