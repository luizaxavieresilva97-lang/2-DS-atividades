class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    verSaldo() {
        console.log(`
            Olá ${this.titular},
            seu saldo atual é
            R$ ${this.saldo}`)
    }
    sacar(valor) {
        this.saldo -= valor;
    }

    depositar(valor) {
        this.saldo += valor;
    }
}

let contaDoKleiton = new ContaBancaria("Kleiton", 15000)
contaDoKleiton.verSaldo()
contaDoKleiton.depositar(10000)
contaDoKleiton.verSaldo()
contaDoKleiton.sacar(988889999999)
contaDoKleiton.verSaldo()

let contaDaGiginoOF = new ContaBancaria("Gigi no OF", -666)
contaDaGiginoOF.verSaldo() // -666
contaDaGiginoOF.depositar(6666)
contaDaGiginoOF.verSaldo() // 6000
contaDaGiginoOF.sacar(123)
contaDaGiginoOF.verSaldo() // 5877
// criar o método sacar e sacar 100 da sua conta