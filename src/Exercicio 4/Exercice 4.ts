interface newFuncionario {
  
    nome : string;
    idade : number;
    anoDeIngressamento : number;
    idDeAcesso : string;
  }
class Funcionario {
    private nome : string
    private idade : number
    private anoDeIngressamento : number
    private idDeAcesso : string

    constructor ({nome, idade, anoDeIngressamento, idDeAcesso} : newFuncionario) {
        this.nome = nome
        this.idade = idade
        this.anoDeIngressamento = anoDeIngressamento
        this.idDeAcesso = idDeAcesso
}
}

export { Funcionario }