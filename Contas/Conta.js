export class Conta {

    constructor (saldoInicial, cliente, agencia) {
        
        if(this.constructor == Conta) {
            throw new Error("Você não pode instanciar um objeto tipo CONTA ela é uma Classe Abstrata!")
        };

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    };

    

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        };
    };

    get cliente(){
        return this._cliente;
    };

    get saldo(){
        return this._saldo;
    };



    _sacar(valor, taxa) {

        const valorSacado = taxa * valor;

        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    };


    sacar(valor){
      
        throw new Error("Você tem que implementar o método SACAR")
    };

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    };

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    };
};