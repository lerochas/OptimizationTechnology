function preencheNumero(n, qtdCaracter, preencheCom) {
    var numero = qtdCaracter - n.toString().length + 1;
    return Array(numero).join(preencheCom || '0') + n;
  };

console.log(preencheNumero(86743, 10));