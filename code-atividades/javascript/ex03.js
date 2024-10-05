// Crie um programa que calcule o antecessor e sucessor de um número
// Crie um programa que calcule o dobro, triplo e raiz quadrada de um número
// Crie um programa que calcule a média aritmética entre dois números

// Função para obter entrada do usuário
let num1 = parseInt(prompt("Digite um número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

// Cálculo do antecessor e sucessor
let antecessor = num1 - 1;
let sucessor = num1 + 1;

// Cálculo do dobro, triplo e raiz quadrada
let dobro = num1 * 2;
let triplo = num1 * 3;
let raizQuadrada = Math.sqrt(num1);

// Cálculo da média aritmética
let media = (num1 + num2) / 2;

// Exibindo os resultados
console.log(`O antecessor do número informado é ${antecessor} e o sucessor é ${sucessor}. O dobro é ${dobro}, o triplo é ${triplo} e a sua raiz quadrada é ${raizQuadrada}.`);
console.log(`A média dos dois números é: ${media}`);
