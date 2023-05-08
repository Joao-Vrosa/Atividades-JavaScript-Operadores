/*
12) Em uma festa de família alemã, 45 pessoas foram convidadas para beber.
Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a média de litros bebidos por pessoa,
considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou.
Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos.
Ao final, mostrar a média de litros bebidos por pessoa na festa.
*/

let qtdPessoa, qtdChopp, mediaPessoa, choppDesperdicado, choppSobrou

qtdPessoa = 45
qtdChopp = 300

choppDesperdicado = Number(prompt("Chopp desperdicado: "))
choppSobrou  = Number(prompt("Chopp que sobrou: "))

qtdChopp = qtdChopp - choppDesperdicado
qtdChopp = qtdChopp - choppSobrou

mediaPessoa = qtdChopp / qtdPessoa

console.log(`Chopp desperdicado: ${choppDesperdicado} litros`)
console.log(`Chopp que sobrou: ${choppSobrou} litros`)
console.log(`Media de chopp consumido por pessoa: ${mediaPessoa.toFixed(2)}`)

