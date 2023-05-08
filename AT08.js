/*
8) Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, 
exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. 
Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. 
Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) 
existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.
*/

let QtdMachos, QtdFemeas, QtdCasais, areaIndividual, areaCasal, areaTotal, saolteiros

QtdMachos = 5
QtdFemeas = 9
areaIndividual = 320
areaCasal = 400

QtdCasais = Number(prompt("Quantos casais: "))

// Verificando solteiros
QtdMachos = QtdMachos - QtdCasais
QtdFemeas = QtdFemeas - QtdCasais

saolteiros = QtdMachos + QtdFemeas

// Nao da pra ter mais de 5 casais, desta forma, limitando ate 5
if (QtdCasais > 5) {
    console.log("Quantidade de casal invalida!")
    // Duvida - Como sair do codigo?
}

areaTotal = (areaCasal * QtdCasais) + (areaIndividual * saolteiros)

console.log(`Area total: ${areaTotal}Km²`)

