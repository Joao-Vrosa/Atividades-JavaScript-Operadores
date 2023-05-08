/*
5) Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela.

Formula: °F = °C × 1, 8 + 32
*/

let celsius, fahrenheit

celsius = Number(prompt("Digite a temperatura em Celsius"))


fahrenheit = celsius * 1.8 + 32

console.log(`${celsius} graus celsius equivalem a ${fahrenheit} fahrenheit.`)

