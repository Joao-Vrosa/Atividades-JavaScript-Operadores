/*
1) Crie um programa que peça os dados de um cliente: Nome, idade, nacionalidade, endereço. 
Após digitados os dados, mostrar na tela a seguinte mensagem "Cliente [Nome], com [idade] anos, [nacionalidade], 
reside no endereço [endereço]". Exemplo: Cliente Lucas, com 29 anos, brasileiro, reside no endereço Rua Victor Meirelles, 281, 
Centro, Florianópolis.
*/

let nomePessoa, idadePessoa
let nacionalidade, endereco

nomePessoa = prompt("Nome: ")
idadePessoa = Number(prompt("Idade: "))
nacionalidade = prompt("Nacionalidae: ")
endereco = prompt("Endereço: ")

/*
console.log(nomePessoa)
console.log(idadePessoa)
console.log(nacionalidade)
console.log(endereco)
*/


console.log(`Cliente ${nomePessoa}, com idade ${idadePessoa} anos, ${nacionalidade}, reside no endereço ${endereco}.`)

