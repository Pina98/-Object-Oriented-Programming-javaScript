"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(_a) {
        var nome = _a.nome, idade = _a.idade, anoDeIngressamento = _a.anoDeIngressamento, idDeAcesso = _a.idDeAcesso;
        this.nome = nome;
        this.idade = idade;
        this.anoDeIngressamento = anoDeIngressamento;
        this.idDeAcesso = idDeAcesso;
    }
    return Funcionario;
}());
exports.Funcionario = Funcionario;
