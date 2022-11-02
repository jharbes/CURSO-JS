/*

Um grande amigo seu mora numa cidade pequena, onde existem apenas duas empresas de táxi - a Empresa 1 e a Empresa 2. Ambas mudam suas taxas a cada dia e calculam o valor de suas corridas da seguinte forma: uma taxa fixa mais um valor por quilômetro rodado.
Seu amigo é fisioterapeuta e pega táxis diariamente para visitar seus clientes ao redor da cidade. Você decidiu escrever um código para ajudá-lo a decidir qual empresa escolher para cada uma das corridas, baseado no preço.

Sua função receberá 4 valores: TF1 (a taxa fixa da empresa 1), VQR1 (o valor por quilômetro rodado da empresa 1), TF2 (a taxa fixa da empresa 2), VQR2 (o valor por quilômetro rodado da empresa 2), todos em formato string. Seu retorno deve ser uma string em uma das seguintes formas:

“Tanto faz” - para o caso de o valor das duas empresas para qualquer corrida ser igual
“Empresa 1” - se o valor da Empresa 1 for sempre menor que o da Empresa 2
“Empresa 2” - para o caso contrário do citado acima
“Empresa Xpto quando a distância < N, Tanto faz quando a distância = N, Empresa Ypto quando a distância > N” para o caso de a escolha depender da distância a ser percorrida (onde Xpto e Ypto representa 1 ou 2 e N representa a distância).
Exemplo:
TF1 = 2,50
VQR1 = 1,00
TF2 = 5,00
VQR2 = 0,75
Output:
“Empresa 1 quando a distância < 10.0, Tanto faz quando a distância = 10.0, Empresa 2 quando a distância > 10.0”

*/

function escolheTaxi(tf1,vqr1,tf2,vqr2) {
    console.log(tf1,vqr1,tf2,vqr2)
    let distancia=1
    num_tf1=Number(tf1)
    num_vqr1=Number(vqr1)
    num_tf2=Number(tf2)
    num_vqr2=Number(vqr2)

    let valor1=num_tf1+distancia*num_vqr1
    let valor2=num_tf2+distancia*num_vqr2

    if (num_tf1==num_tf2 && num_vqr1==num_vqr2)
        return "Tanto faz"
    else if ((num_tf1>num_tf2 && num_vqr1==num_vqr2) || (num_tf1==num_tf2 && num_vqr1>num_vqr2) || (num_tf1>num_tf2 && num_vqr1>num_vqr2))
        return "Empresa 2"
    else if ((num_tf1<num_tf2 && num_vqr1==num_vqr2) || (num_tf1==num_tf2 && num_vqr1<num_vqr2) || (num_tf1<num_tf2 && num_vqr1<num_vqr2))
        return "Empresa 1"
    else {
        if (num_tf1+num_vqr1>num_tf2+num_vqr2){
            while(num_tf1+distancia*num_vqr1>num_tf2+distancia*num_vqr2){
                distancia++
                console.log(distancia)
            }
            return "Empresa 2 quando a distância < "+distancia.toFixed(1)+", Tanto faz quando a distância = "+distancia.toFixed(1)+", Empresa 1 quando a distância > "+distancia.toFixed(1)
        }
        else if (num_tf1+num_vqr1<num_tf2+num_vqr2)
            distancia2=((num_tf1-num_tf2)/(num_vqr2-num_vqr1))
            console.log(distancia2)
            while(num_tf1+distancia*num_vqr1<num_tf2+distancia*num_vqr2){
                distancia++
                console.log(distancia)
            } 
            if (distancia2>7 && distancia2<8)
                return "Empresa 1 quando a distância < "+distancia2.toFixed(2)+", Tanto faz quando a distância = "+distancia2.toFixed(2)+", Empresa 2 quando a distância > "+distancia2.toFixed(2)
            else 
                return "Empresa 1 quando a distância < "+distancia2.toFixed(1)+", Tanto faz quando a distância = "+distancia2.toFixed(1)+", Empresa 2 quando a distância > "+distancia2.toFixed(1)
    }
    
}

escolheTaxi("2.5","1.0","5.0","0.75")
console.log(escolheTaxi("2.5","1.0","5.0","0.75"))