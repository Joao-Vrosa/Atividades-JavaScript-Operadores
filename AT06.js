/*
6) Uma cidade pretende apurar os votos de sua eleição.
Faça um programa para ler o número total de eleitores.
Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e
total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores).
Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
*/

let candidatoX, candidatoY, votosBrancos, votosNulos, totalVotos
let pCandidatoX, pCandidatoY, pNulos, pBrancos, totalEleitores

totalEleitores = Number(prompt("Total de eleitores: "))
candidatoX = Number(prompt("Quantidade de votos no cadidato X: "))
candidatoY = Number(prompt("Quantidade de votos no cadidato Y: "))
votosBrancos = Number(prompt("Quantidade de votos brancos: "))
votosNulos = Number(prompt("Quantidade de votos nulos: "))

totalVotos = candidatoX + candidatoY + votosBrancos + votosNulos

if (totalVotos != totalEleitores) {
    alert("A quantidade de votos é diferente da quantidade de eleitores")
    //window.stop() - Tentei finalizar o codigo caso ele entrasse nessa condicao.
}

// Verifaicando o percentual:
pCandidatoX = candidatoX / totalEleitores * 100
pCandidatoY = candidatoY / totalEleitores * 100
pBrancos = votosBrancos / totalEleitores * 100
pNulos = votosNulos / totalEleitores * 100

// Saída:
console.log(`CandidatoX - ${pCandidatoX}% dos votos.`)
console.log(`CandidatoY - ${pCandidatoY}% dos votos.`)
console.log(`Brancos - ${pBrancos}% dos votos.`)
console.log(`Nulos - ${pNulos}% dos votos.`)

