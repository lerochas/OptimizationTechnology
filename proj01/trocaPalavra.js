var nomeSeu = "Seu"
var nomeDona = "Dona"

const trocaNome = (nomeSeu,nomeDona) => {
    nomeSeu = "Senhor";
    nomeDona = "Senhora";
    var novoNome = nomeSeu + " " + nomeDona;

    return novoNome;
}

console.log(trocaNome());