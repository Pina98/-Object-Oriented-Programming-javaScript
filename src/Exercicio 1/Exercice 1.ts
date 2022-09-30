interface newCliente {
  
    nome : string;
    idade : number;
    email : string;
    bairro : string;
  }

class Cliente {
    private nome : string
    private idade : number
    private email : string
    private bairro : string

    constructor ({nome, idade, email, bairro} : newCliente) {
        this.nome = nome
        this.idade = idade
        this.email = email
        this.bairro = bairro
    }
}

export {Cliente}