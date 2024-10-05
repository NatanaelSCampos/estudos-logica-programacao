// Solicita as informações do aluno e as notas dos bimestres
let nomeAluno = prompt("Digite o nome do Aluno:");
let nota1 = parseInt(prompt("Nota do 1º Bimestre (0 a 100):"));
let nota2 = parseInt(prompt("Nota do 2º Bimestre (0 a 100):"));
let nota3 = parseInt(prompt("Nota do 3º Bimestre (0 a 100):"));
let nota4 = parseInt(prompt("Nota do 4º Bimestre (0 a 100):"));

let peso_bimestral1 = 2;
let peso_bimestral2 = 3;

// Calcula a média ponderada
let calc_media_ponderada = (nota1 * peso_bimestral1 + nota2 * peso_bimestral1 + nota3 * peso_bimestral2 + nota4 * peso_bimestral2) / (peso_bimestral1 * 2 + peso_bimestral2 * 2);

let media_ponderada_inteira = Math.round(calc_media_ponderada);

// Verifica a média e exibe a mensagem correspondente
if (media_ponderada_inteira >= 60) {
    console.log(`O Aluno ${nomeAluno} obteve a média de ${media_ponderada_inteira} e está aprovado.`);
} else if (media_ponderada_inteira >= 20 && media_ponderada_inteira <= 59) {
    console.log(`O Aluno ${nomeAluno} obteve a média de ${media_ponderada_inteira} e está em recuperação.`);
} else {
    console.log(`O Aluno ${nomeAluno} obteve a média de ${media_ponderada_inteira} e está reprovado.`);
}
