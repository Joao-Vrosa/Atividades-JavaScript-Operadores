/*
10) Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, 
realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela, com 3 casas depois da vírgula.
*/

let altura, peso, imc

altura = Number(prompt("Altura: "))
peso = Number(prompt("Peso: "))

imc = peso / (altura * altura)

console.log(`Seu IMC: ${imc.toFixed(3)}`)

