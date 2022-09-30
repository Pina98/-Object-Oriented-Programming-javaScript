import PromptSync = require('prompt-sync');
import { Aviao } from './Exercice 2';

const prompt = PromptSync()

const veloMax = prompt('Velocidade máxima: ')
const ano = Number(prompt('Ano de fabricação: '))
const modelo = prompt('Modelo do avião: ')
const companhia = prompt('Companhia: ')

const avion = new Aviao ({
    veloMax,
    ano,
    modelo,
    companhia
})

console.log('\n\nVelocidade máxima: ' + veloMax)
console.log('Ano de fabricação: ' + ano)
console.log(`O modelo do avião é ${modelo}`)
console.log(`A companhia é ${companhia}\n\n`)