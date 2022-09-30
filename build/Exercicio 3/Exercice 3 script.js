"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var Exercice_3_1 = require("./Exercice 3");
var prompt = PromptSync();
var ano = Number(prompt('Ano de fabricação: '));
var modelo = prompt('Modelo do aparelho: ');
var companhia = prompt('Companhia: ');
var telephone = new Exercice_3_1.ProdutoEletronico({
    ano: ano,
    modelo: modelo,
    companhia: companhia
});
console.log('\nAno de fabricação: ' + ano);
console.log("O modelo do celular \u00E9 o ".concat(modelo));
console.log("A marca do celular \u00E9 a ".concat(companhia, "\n\n"));
