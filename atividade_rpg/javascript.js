class Personagem {
    constructor(nome, titulo, hp, mana, energia){
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }

}
class Habilidade{
    constructor(id, nome, dano, custo, energia){
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;

    }
}
// Instancia Classes - Criar Objetos
let hero = new Personagem("Elfo Mágico","🧝‍♀️ elfo héroi", 100,100,0);
let boss = new Personagem("Goblin Boss🧌","chefão",100,100,50);
//Preencher os Status 
document.getElementById("nome-hero").textContent = hero.nome;
document.getElementById("titulo-heroi").textContent = hero.titulo;
// .
document.getElementById("nome-boss").textContent = boss.nome;
document.getElementById("titulo-boss").textContent = boss.titulo;
//criar habilidades
let listhabilidades = [
    new Habilidade(1, "⚔️ Ataque", 4, 0, 0),
    new Habilidade(2, "🪙 skill", 8, 10, 0),
    new Habilidade(1, "💥 supremo", 15, 0, 100),
];
listahabilidades.forEach(Hab => {
    let btn = document.createElement("button");//<button>
    btn.innerText = Hab.nome;
    btn.classList.add("btn","btn-outline-warning");
    containerBtn.appendChild(btn);
    btn.onclick = () => {
        hero.hero_atacar(boss, hab)
    }
});