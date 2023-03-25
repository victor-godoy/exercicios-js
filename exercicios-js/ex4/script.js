/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
  
*/

const distribuidora = [
  {
    estado: "Sp",
    valor: 67836.43,
  },

  {
    estado: "Rj",
    valor: 36678.66,
  },

  {
    estado: "Mg",
    valor: 29229.88,
  },

  {
    estado: "Es",
    valor: 27165.48,
  },

  {
    estado: "outros",
    valor: 19849.53,
  },
];

const somaTotal = distribuidora.reduce((acc, distribuidora) => {
  return acc + Number(distribuidora.valor);
}, 0);

console.log("Valor Total da Distribuidora: ", somaTotal);
// sp
const percentualSp = Number(
  Math.floor(distribuidora[0].valor * 100) / somaTotal
);
console.log("Percentual de Sp: ", percentualSp);
// rj
const percentualRj = Number(
  Math.floor(distribuidora[1].valor * 100) / somaTotal
);
console.log("Percentual de Rj: ", percentualRj);
// mg
const percentualMg = Number(
  Math.floor(distribuidora[2].valor * 100) / somaTotal
);
console.log("Percentual de Mg: ", percentualMg);
// es
const percentualEs = Number(
  Math.floor(distribuidora[3].valor * 100) / somaTotal
);
console.log("Percentual de Es: ", percentualEs);
// outros
const percentualOutros = Number(
  Math.floor(distribuidora[4].valor * 100) / somaTotal
);
console.log("Percentual de Outros: ", percentualOutros);
