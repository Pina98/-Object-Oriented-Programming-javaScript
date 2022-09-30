interface newProdutoEletronico {
  
    ano : number;
    modelo : string;
    companhia : string;
  }

class ProdutoEletronico {
 
    private ano : number
    private modelo : string
    private companhia : string

    constructor ({ano, modelo, companhia} : newProdutoEletronico) {
        this.ano = ano
        this.modelo = modelo
        this.companhia = companhia
    }
}

export { ProdutoEletronico }