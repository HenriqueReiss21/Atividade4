import PromptSync from "prompt-sync";

const prompt = PromptSync()

const limite = Number(prompt('Quantos números deseja inserir? '))

let lista = []

for(let i = 0; i < limite; i++){
    let n = Number(prompt(`${i+1}° númeor: `))
    lista.push(n)
}

let menorValor = lista[0], maiorValor = lista[0]

for(let i = 0; i < lista.length; i++){
    if(lista[i] > maiorValor){
        maiorValor = lista[i]
    } else if (lista[i] < menorValor){
        menorValor = lista[i]
    }
}

console.log(`Menor valor da lista inserida: ${menorValor}`)
console.log(`Maior valor da lista inserida: ${maiorValor}`)