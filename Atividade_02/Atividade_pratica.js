const calcularMedia = function (nota1, nota2, nota3) {
      return (nota1 + nota2 + nota3) /3 
}
function notaFinal(media) {
    console.log("A nota do aluno foi: " + media.toFixed(2))
    if (media>=7)
        console.log ("Aluno aprovado")
    else 
        console.log ("Aluno reprovado")
}
let media = calcularMedia (2, 9, 10)
notaFinal (media)
    
