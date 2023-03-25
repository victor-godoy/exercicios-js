/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function inverter(texto) {
  var saida = "";
  for (var i = texto.length - 1; i >= 0; i--) {
    saida += texto[i];
  }

  console.log(saida);
}
inverter("testndo aqui");

0 - 5;

// i vai receber o tamanho do meu texto
// o ultimo espaco esta vazio no vetor por isso o lenght - 1
// entao 5 - 1 = 4
// cada interacao que i for maior ou igual a 0 ele vai tirando 1 ( so que de tras para frente por nisso inverte    )
