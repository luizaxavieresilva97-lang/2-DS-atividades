// ATIVIDADE 1: O FILTO DE HASHTAGS
const tags = ["#vida", "#javascript", "#aula", "#js", "#café"];
tags.filter(p => p.includes("#js")).map(s => s.toUpperCase()).forEach(i => console.log(i));

//ATIVIDADE 2: FORMATADOR DE NOME DE USUÁRIOS
const usuarios = ["aLeX", "mArIa", "jOãO", "bIa"];
usuarios.map(n => n.toLowerCase())
    .forEach(n => console.log(n));

//ATIVIDADE 3: SISTEMA DE BUSCA DE CONVIDADOS
const convidados = ["Ana", "Al", "Alberto", "Bia", "Amanda", "Ab"];
const convidados_listados = convidados.filter(Text => Text > 3);
convidados_listados.forEach(text => console.log(text))

//ATIVIDADE 4: O CORRETOR DE PREÇOS
const precos = [50, 100, 150, 200];
const desconto = precos.map(m => m - 10);
desconto.forEach(c => console.log(`${c}R$`));