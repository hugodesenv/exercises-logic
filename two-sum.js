/**
 * Retorno todos os índices possíveis que resultam "target".
 * Return every possible index that results "target"
 */

const input = [-1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 6;

let resultList = [];
let groupBase = [];

const _totalGroup = () => {
  let total = 0;
  groupBase.forEach((i) => (total += input[i]));
  return total;
};

for (let i = 0; i < input.length; i++) {
  // gravo o numero base, exemplo:
  // o primeiro é [2], ai vamos até o [2,4,7,9,15]
  // depois no proximo laço vai pra [4], depois [4,7] até [4,7,9,15]
  groupBase = [i];

  let totalGroupBase = _totalGroup();

  if (totalGroupBase === target) {
    resultList = groupBase;
    console.log('resultList final: ', resultList);
    break;
  }

  let j = 0;

  while (j < input.length) {
    j++;

    /**
     * Quando chegamos no último índice, incrementando o próximo número base em relação ao nosso "i" e também assumimos o valor de "j" para o próximo. Ficou confuso? Veja:
     * Vamos supor que estamos com o array: [1, 2, 7] e queremos o número "4"
     * No "for" de "i" estamos no índice 0, então: [1,2], [1,7]... Chegamos no final da lista, então agora vamos adicionar o índice "1", o grupo vai virar: [1,2] e aí comparo [1,2] é igual a 7? etc.
     */
    if (j === input.length) {
      groupBase.push(i + 1);
      j = groupBase.length;
      continue;
    }

    /**
     * Fazemos esse "if" pra nao considerar o mesmo índice pra calculo. E aí se o valor bateu, adicionamos esse agrupamento no "resultList" pra mostrar pro usuário.
     */
    if (j > i) {
      totalGroupBase = _totalGroup() + input[j];

      if (totalGroupBase === target) {
        resultList = groupBase;
        resultList.push(j);
        //sair_do_for = true;

        console.log('resultList final: ', resultList);
        break;
      }
    }
  }
}
