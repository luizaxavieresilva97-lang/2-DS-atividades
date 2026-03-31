// let e const
const nomeJogador = "Alex";
let pontos = 0;
pontos = pontos + 10;
pontos += 50;
console.log(nomeJogador, "tem", pontos, "pontos");

// template literal
const preco = 100;
const desconto = 20;
console.log(`O produto custa R$ ${preco - desconto} com desconto.`)

const nomeAluno = "Antônio";
const disciplina = "Matemática";
let nota1 = 8;
let nota2= 5;
const resultado = `
--- BOLETIM ESCOLAR ---
Aluno: ${nomeAluno}
Disciplina: ${disciplina}
Status: ${(nota1+nota2)/2 > 6 ? "APROVADO" : "RECUPERAÇÃO"}`;
console.log(resultado);