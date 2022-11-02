/*

Sua equipe está trabalhando em um app de streaming de músicas e uma das funcionalidades é criar um embaralhador de músicas. Uma pesquisa feita pela equipe de UX (experiência do usuário) mostrou que essa é uma das funcionalidades mais importantes para os usuários e por isso foi priorizada a criação de um experimento para testar a melhor solução.

A ideia é criar vários embaralhadores diferentes e realizar um teste com partes dos usuários (chamado de teste A/B), onde cada grupo de usuários selecionado recebe uma versão e através de pesquisas e métricas de utilização saberemos qual terá a maior aceitação.

Sua tarefa será desenvolver um desses embaralhadores. Você deve criar uma função que receberá uma lista de pesos que representa as músicas mais ouvidas pelo usuário. Sua função deve retornar uma lista organizada intercalando as músicas mais ouvidas com as músicas menos ouvidas. Por exemplo:

Na situação onde a lista de pesos é: [2, 10, 5, 3] sua função deverá retornar [10, 2, 5, 3]

*/

function shuffleMusicas(musicasTocadas) {
    let musicasTocadasCrescente=[]
    let musicasTocadasDecrescente=[]
    let resultado=[]
    for (let i=0;i<musicasTocadas.length;i++){
        musicasTocadasCrescente[i]=musicasTocadas[i]
        musicasTocadasDecrescente[i]=musicasTocadas[i]
    }
    musicasTocadasCrescente.sort((a,b)=>a-b)
    musicasTocadasDecrescente.sort((a,b)=>b-a)
    console.log(musicasTocadasCrescente,musicasTocadasDecrescente,musicasTocadas)

    for (let i=0;i<musicasTocadas.length;i++){
        resultado.push(musicasTocadasDecrescente[i])
        resultado.push(musicasTocadasCrescente[i])
    }
    console.log(resultado)
}

shuffleMusicas([2,10,5,3])