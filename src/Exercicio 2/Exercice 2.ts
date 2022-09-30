interface newAviao {
  
    veloMax : string;
    ano : number;
    modelo : string;
    companhia : string;
  }

class Aviao {
    private veloMax : string
    private ano : number
    private modelo : string
    private companhia : string

    constructor ({veloMax, ano, modelo, companhia} : newAviao) {
        this.veloMax = veloMax
        this.ano = ano
        this.modelo = modelo
        this.companhia = companhia
    }
}

export {Aviao}