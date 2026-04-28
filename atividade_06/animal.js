class Animal {
    constructor(apelido) {
        this.nome = apelido;
    }
    falar(som) {
        console.log(som);
    }
}

class Gato extends Animal {
    ronronar() {
        console.log(`o ${this.name} está ronronando.`)
    }
 }

 class Cachorro extends Animal {
    abanarRabo() {
        console.log(`O ${this.nome} está feliz.`)
    }
 }

 let meg = new Gato("Meg");
 let pandora = new Cachorro("Pandora");

 meg.falar("Miau!");
 meg.ronronar();
 pandora.falar("Au Au!")
 pandora.abanarRabo();
 
 //criar uma classe de outro animal de estimação
 //cobra, calopsita, ramster, etc...
 //tem que estender Animal e ter um método próprio

 class Cobra extends Animal {
    ameaçar() {
        console.log(`O ${this.nome} está te ameaçando`)
    }
 }

 let Danilo = new Cobra ("Danilo");

 Danilo.falar("SSSSSSZZZZZZ!!!!")
 Danilo.ameaçar();
 