import React, { useState } from 'react';

//Quem usar esse hook vai ter acesso ao estado do erro, e a função de validarCampos
//Hook customizado
//Ou seja, independente das validacoes que eu tiver, ele vai criar um campo aqui falando que é valido e tem um texto vazio
function useErros(validacoes) {
    const estadoInicial = criarEstadoInicial(validacoes);
    const [erros, setErros] = useState(estadoInicial);
    function validarCampos(event) {
        const { name, value } = event.target;
        const novoEstado = { ...erros };
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    return [erros, validarCampos];
}

function criarEstadoInicial(validacoes) {
    const estadoInicial = {};
    for (let campo in validacoes) {
        estadoInicial[campo] = { valido: true, texto: "" };
    }
    return estadoInicial;
}

//Perceba que o setErros está encapsulado, enquanto o validarCampos e o estado
export default useErros;