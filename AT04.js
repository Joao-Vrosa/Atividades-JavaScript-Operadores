/*
4) Desenvolva uma programação que peça ao usuário para digitar o 
ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). 
Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas.
*/

let anoNascimento, anoAtual, anos, meses, dias, semanas

anoNascimento = Number(prompt("Ano do seu nascimento (Formato: YYYY): "))
anoAtual = Number(prompt("Ano atual (Formato: YYYY:) "))

anos = anoAtual - anoNascimento
meses = anos * 12
dias = meses * 30
semanas = dias / 7


// Math.round -  Arredonda números booleanos.
console.log(`Você tem ${anos} anos. Isso equivale em ${meses} meses, ${dias} dias e ${Math.round(semanas)} semanas.`)

