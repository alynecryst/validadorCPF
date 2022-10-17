const cpf = "033.217.551-06";

function validaCPF(cpf) {
    let cpfFormatado = cpf.replaceAll(/\D/g, "");
    let soma = 0;
    let aux1 = 10;
    let resto1 = 0;
    let resto2 = 0;
    let aux2 = 11;
    let soma2 = 0;

    /*Calcula e valida 10º digito*/
    soma = calculaSomatoria(soma, cpfFormatado, (cpfFormatado.length - 2), aux1);
    resto1 = validaResto(soma, resto1);

    /*Calcula e valida 11º digito*/
    soma2 = calculaSomatoria(soma2, cpfFormatado, (cpfFormatado.length - 1), aux2);
    resto2 = validaResto(soma2, resto2);

    if (resto1 == parseInt(cpfFormatado.substring(9, 10)) && resto2 == parseInt(cpfFormatado.substring(10, 11))) {
        return "CPF valido!"
    } else {
        return "CPF invalido!"
    }
}

function validaResto(soma, resto) {
    resto = (soma * 10) % 11
    return resto == 10 ? 0 : resto
}

function calculaSomatoria(soma, cpf, tamanho, aux) {
    for (let i = 0; i < tamanho; i++) {
        soma += (parseInt(cpf.substring(i, (i + 1)))) * aux;
        aux--
    }
    return soma
}

console.log(validaCPF(cpf));
console.log(validaCPF("028.146.881-89"));