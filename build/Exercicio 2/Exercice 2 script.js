"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var Exercice_2_1 = require("./Exercice 2");
var prompt = PromptSync();
var veloMax = prompt('Velocidade máxima: ');
var ano = Number(prompt('Ano de fabricação: '));
var modelo = prompt('Modelo do avião: ');
var companhia = prompt('Companhia: ');
var avion = new Exercice_2_1.Aviao({
    veloMax: veloMax,
    ano: ano,
    modelo: modelo,
    companhia: companhia
});
console.log('\n\nVelocidade máxima: ' + veloMax);
console.log('Ano de fabricação: ' + ano);
console.log("O modelo do avi\u00E3o \u00E9 ".concat(modelo));
console.log("A companhia \u00E9 ".concat(companhia, "\n\n"));
