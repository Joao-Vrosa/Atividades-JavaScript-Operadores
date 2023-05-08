/*
13) Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. 
O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. 
Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na tela a 
quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50.
*/

let largura, comprimento, azulejosPorMetro, vTotal, caixaAzulejo, vCaixa, area, qtdAzulejo

vCaixa = 45.50
caixaAzulejo = 60
azulejosPorMetro = 120

largura = Number(prompt("Lagura: "))
comprimento = Number(prompt("Comprimento: "))

area = largura * comprimento

qtdAzulejo = area * azulejosPorMetro
vTotal = (qtdAzulejo / caixaAzulejo) * vCaixa


console.log(`Quantidade de azulejos que devem ser comprados: ${qtdAzulejo}`)
console.log(`Valor total: R$${vTotal}`)

