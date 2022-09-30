"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(_a) {
        var nome = _a.nome, idade = _a.idade, email = _a.email, bairro = _a.bairro;
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.bairro = bairro;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
