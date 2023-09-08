import PromptSync from "prompt-sync";

const prompt = PromptSync()

function tabuada(n, limite){
    for(let i = 1; i <= limite; i++){
        const total = n*i
        console.log(`${n} X ${i} = ${total}`)
    }
}

const n = Number(prompt('Digite um número a ser multiplicado: '))
const limite = Number(prompt('Digite o limite de até onde a tabuada será feita: '))

tabuada(n,limite)