import PromptSync = require('prompt-sync');
import { ProdutoEletronico } from './Exercice 3';

const prompt = PromptSync()

const ano = Number(prompt('Ano de fabricação: '))
const modelo = prompt('Modelo do aparelho: ')
const companhia = prompt('Companhia: ')

const telephone = new ProdutoEletronico ({
    ano,
    modelo,
    companhia
})

console.log('\nAno de fabricação: ' + ano)
console.log(`O modelo do celular é o ${modelo}`)
console.log(`A marca do celular é a ${companhia}\n\n`)