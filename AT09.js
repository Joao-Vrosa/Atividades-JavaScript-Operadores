/*
9) Criar um programa que realize o cálculo de uma média da faculdade.
A média é composta por três notas: Atividade Individual (peso 1), Seminário em Equipe (peso 1), Projeto final (peso 3). 
O usuário deve digitar as três notas e a média deve ser mostrada na tela.
*/

let notaUm, notaDois, notaTres, mediaPonderada
let pesoUm, pesoDois, pesoTres

pesoUm = 1
pesoDois = 2
pesoTres = 3

notaUm = Number(prompt("Nota Atividade Individual: "))
notaDois = Number(prompt("Nota Seminario em Equipe: "))
notaTres = Number(prompt("Nota Projeto Final: "))

// Media ponderada:
mediaPonderada = ((pesoUm * notaUm) + (pesoDois * notaDois) + (pesoTres * notaTres)) / (pesoUm + pesoDois + pesoTres)

// console.log(`Media: ${Math.round(mediaPonderada)}`) // Math.roud - Arredonda o valor
//console.log(`Media: ${mediaPonderada}`)

console.log(`Media: ${mediaPonderada.toFixed(2)}`) // toFixed() - Coloca, conforme parametro(2...3..4.5), os numeros de casas decimais

