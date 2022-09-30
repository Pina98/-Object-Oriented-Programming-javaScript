"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var Exercice_1_1 = require("./Exercice 1");
var prompt = PromptSync();
var nome = prompt('Digite seu Nome: ');
var idade = Number(prompt('Digite sua idade: '));
var email = prompt('Digite seu e-mail: ');
var bairro = prompt('Digite seu bairro: ');
var cliente = new Exercice_1_1.Cliente({
    nome: nome,
    idade: idade,
    email: email,
    bairro: bairro
});
console.log('\n\nNome:' + nome);
console.log('Idade: ' + idade);
console.log('Bairro: ' + bairro);
console.log('e-mail: ' + email);
