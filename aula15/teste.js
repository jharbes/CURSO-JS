
let a=[,,,]

let b=[]

b[10]=50
b.push(20)
b[0]='cachorro'
b.sort()

var c=[1,2,3,5,2,6]
console.log(a)

console.log(b)

console.log(b.length);console.log(a+b)
console.log()
b[11]=2
for (i=0;i<b.length;i++)
    console.log('B['+i+']= '+b[i])

for (i in b)
    console.log(b[i])


console.log(c.indexOf(2))