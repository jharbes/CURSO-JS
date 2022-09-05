// JSON = JavaScript Object Notation
// JSON é um formato textual de conversão entre linguagens para que todas possam entender e converter entre si um objeto.

// Abaixo transformando um objeto em JSON
const obj={a:1,b:2,c:3,soma(){return a+b+c}}
console.log(JSON.stringify(obj)) // observe o retorno do console.log como será convertido o obj acima para o formato JSON, observe que a função foi excluída do JSON, apenas dados textuais são convertidos e transferidos.

// console.log(JSON.parse("{ a: 1, b: 2, c: 3}"))  <-- formato errado para JSON
// console.log(JSON.parse("{ 'a':1, 'b':20")) <-- formato errado para JSON

// Os dois abaixo são corretos para conversão do formato textual JSON para objeto, apenas observe o resultado do console.log
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')) 
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))

// Abaixo temos também um exemplo em que são passados dados em strings, objetos e arrays por meio de JSON, observe o formato necessário para tal: (lembrando que em todos os casos os espaços são opcionais, podemos suprimi-los sem problema)
console.log(JSON.parse('{"a": 1, "b": "string" ,"c": true ,"d": {} , "e": []}'))