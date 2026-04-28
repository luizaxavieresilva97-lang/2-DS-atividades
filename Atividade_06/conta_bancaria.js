class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular
        titular;
        this.saldo = saldo;
    }
    
    verSaldo() {
        console.log(`
            Olá ${this.titular}, 
            seu saldo atual é R$ ${this.saldo}`)
    }
    depositar(valor) {
        this.saldo += valor;
    }

    // criar o metodo sacar e sacar 100 da sua conta
    sacar(valor) {
        this.saldo -= valor;
    }
}

let contaDaLuiza = new ContaBancaria("Luiza", 15000)
contaDaLuiza.verSaldo()
contaDaLuiza.depositar(350) 
contaDaLuiza.verSaldo()

let contaDaLuna = new ContaBancaria("Luna" , 3)
contaDaLuna.verSaldo()
