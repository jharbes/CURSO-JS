console.log('a=',a)
var a=2
console.log('a=',a)

/* no caso do var ocorrerá o hoisting (içamento), como se a variavel a tivesse sido declarada
na primeira linha do programa, mesmo que nao tenha sido segue abaixo exemplo
de como a linguagem trata: */

/*

var a
console.log('a=',a)
a=2
console.log('a=',a)

*/

/* Atentar que para o let não existe içamento ou hoisting, ele funciona exatamente como
nas outras linguagens.*/