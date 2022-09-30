import PromptSync = require('prompt-sync');
import { Funcionario } from './Exercice 4';

const prompt = PromptSync()

const nome = prompt('Nome do funcionário: ')
const idade = Number(prompt('Idade do funcionário: '))
const anoDeIngressamento = Number(prompt('Ano de ingressamento: '))
const idDeAcesso = prompt('Id de acesso: ')

const employee = new Funcionario ({
    nome,
    idade,
    anoDeIngressamento,
    idDeAcesso
})

console.log('\n\nO nome do funcionário é: ' + nome)
console.log('Sua idade é: ' + idade)
console.log(`Seu ano de ingressamento na empresa foi em ${anoDeIngressamento}`)
console.log(`Seu id de acesso é ${idDeAcesso}\n\n`)