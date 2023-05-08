/*
11) Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel
rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg)
de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais.
*/

let plastico, papel, metal
let vPlastico, vPapel, vMetal, vTotal

vPlastico = 2.00
vPapel = 3.00
vMetal = 5.00

plastico = Number(prompt("Plastico: "))
papel = Number(prompt("Papel: "))
metal = Number(prompt("Metal: "))

vPlastico = vPlastico * plastico
vPapel = vPapel * papel
vMetal = vMetal * metal

vTotal = vPlastico + vPapel + vMetal

//console.log(vPlastico)
//console.log(vPapel)
//console.log(vMetal)

console.log(`Valor total: R$${vTotal.toFixed(2)}`)

