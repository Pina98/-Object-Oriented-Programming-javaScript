"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var Exercice_4_1 = require("./Exercice 4");
var prompt = PromptSync();
var nome = prompt('Nome do funcionário: ');
var idade = Number(prompt('Idade do funcionário: '));
var anoDeIngressamento = Number(prompt('Ano de ingressamento: '));
var idDeAcesso = prompt('Id de acesso: ');
var employee = new Exercice_4_1.Funcionario({
    nome: nome,
    idade: idade,
    anoDeIngressamento: anoDeIngressamento,
    idDeAcesso: idDeAcesso
});
console.log('\n\nO nome do funcionário é: ' + nome);
console.log('Sua idade é: ' + idade);
console.log("Seu ano de ingressamento na empresa foi em ".concat(anoDeIngressamento));
console.log("Seu id de acesso \u00E9 ".concat(idDeAcesso, "\n\n"));
