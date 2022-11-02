/*

Dada um texto qualquer e um lista de termos de pesquisa (sequencia de caracteres), retorne os primeiros K termos mais recorrentes na string, onde K é um parâmetro configurável.

Exemplo:

String: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

Lista de termos: ["a", "em", "i", "el"]

K: 2

Resultado: ["i", "a"]

Explicação:

Ocorrências de cada termo,"i": 11, "a": 7, "em": 2, "el": 1, com K = 2, retornamos "i" e "a" ordenados conforme a quantidade de ocorrências de cada termo.

Obs: Quando houver termos com quantidades iguais, priorizar o retorno de acordo com a ordem de ocorrência do termo na string.

*/

function calculaTopOcorrenciasDeQueries(texto,queries,k) {
    let ocorrencias=[]
    let ocorrenciasCrescente=[]
    let resultadoFinal=[]
    for (let i=0;i<queries.length;i++)
        ocorrencias.push(0)
    for (let i=0;i<queries.length;i++){
        for (let k=0;k<texto.length;k++){
            if (texto.substring(k,queries[i].length+k)==queries[i])
                ocorrencias[i]++
        }
    }
    for (let i=0;i<ocorrencias.length;i++){
        ocorrenciasCrescente.push(ocorrencias[i])
    }
    ocorrenciasCrescente.sort((a,b)=>b-a)
    console.log(ocorrenciasCrescente)
    for (let i=0;i<k;i++){
        for (var z=0;z<ocorrencias.length;z++){
                if (ocorrencias[z]==ocorrenciasCrescente[i])
                    resultadoFinal.push(queries[z])
        }
        if (ocorrenciasCrescente[i]==ocorrenciasCrescente[i+1])
            resultadoFinal.pop()
    }
    console.log(resultadoFinal)
    return resultadoFinal
}

calculaTopOcorrenciasDeQueries("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",["a","em","i","el"],2)

