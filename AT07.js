/*
7) Crie um programa no qual o usuário deve digitar um número (base) e o seu expoente. Apresentar na tela o resultado da exponenciação.
*/

let numBase, numExpoente, calc

numBase = Number(prompt("Digite o numero base: "))
numExpoente = Number(prompt("Digite o seu expoente: "))

// Math.pow - 
calc = Math.pow(numBase, numExpoente)

console.log(calc)

