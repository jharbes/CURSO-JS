const alunos=[
    {nome:'João',nota:7.3,bolsista:false},
    {nome:'Maria',nota:9.2,bolsista:true},
    {nome:'Pedro',nota:9.8,bolsista:false},
    {nome:'Ana',nota:8.7,bolsista:true}
]

// DESAFIO1: Retornar a pergunta: Todos os alunos são bolsistas?

// DESAFIO2: Algum aluno é bolsista?

//DESAFIO1: Minha resolução: 

console.log(alunos.map(p=>p.bolsista))
console.log(alunos.map(p=>p.bolsista).reduce((x,p)=>{
    //console.log(x,p)
    return x&&p?true:false
}))

// DESAFIO2: Minha resolução: 

console.log(alunos.map(p=>p.bolsista).reduce((x,p)=>{
    //console.log(x,p)
    return x||p?true:false
}))

// DESAFIO1: Resolução do professor:
const todosBolsistas=(resultado,bolsista)=>resultado && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))

//DESAFIO2: Resolução do professor:
const algumBolsista=(resultado,bolsista)=>resultado || bolsista
console.log(alunos.map(a=>a.bolsista).reduce(algumBolsista))