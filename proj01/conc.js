var nome = "Seu"
var sobrenome = "Dona"

const trocaPalavras = (nome, sobrenome) => {
    nome = "Senhor"
    sobrenome = "Senhora"

    var nomeCompleto = console.log(nome + " " + sobrenome)

    return nomeCompleto
}

console.log(trocaPalavras)