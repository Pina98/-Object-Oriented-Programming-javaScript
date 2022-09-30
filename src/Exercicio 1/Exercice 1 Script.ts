import PromptSync = require('prompt-sync');
import { Cliente } from './Exercice 1';

const prompt = PromptSync()

const nome = prompt('Digite seu Nome: ')
const idade = Number(prompt('Digite sua idade: '))
const email = prompt('Digite seu e-mail: ')
const bairro = prompt('Digite seu bairro: ')

const cliente = new Cliente ({
    nome,
    idade,
    email,
    bairro
})

console.log('\n\nNome:' + nome)
console.log('Idade: ' + idade)
console.log('Bairro: ' + bairro)
console.log('e-mail: ' + email)