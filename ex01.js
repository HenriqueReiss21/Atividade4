import PromptSync from "prompt-sync";

function maiorValor(n1,n2,n3){
    const maior = Math.max(n1,n2,n3)
    return maior
}

const prompt = PromptSync()

const n1 = Number(prompt('Digite o primeiro valor: '))
const n2 = Number(prompt('Digite o segundo valor: '))
const n3 = Number(prompt('Digite o terceiro valor: '))

const maior = maiorValor(n1,n2,n3)

console.log(`Maior valor digitado: ${maior}`)