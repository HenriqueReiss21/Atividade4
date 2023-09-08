import PromptSync from "prompt-sync";

const prompt = PromptSync()
let i = 0
let j = 0
let info = []

console.log("\"\"")

let escolhaNome = prompt('Digite seu nome (Caso queira encerrar a interação digite: ""): ')
    while(true){
        let hobbie = prompt('Digite seu hobbie: (Caso queira encerrar a interação digite: "")')

        if(hobbie == "\"\""){
            break
        } else{
            info.push(hobbie)
        }
        i++
    }

console.log(`${escolhaNome}| `)
console.log('Hobbies: ')

for(let k = 0; k < info.length; k++){
    console.log(info[k])
}
