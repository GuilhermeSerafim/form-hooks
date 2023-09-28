import React, { useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

//Esse formulario de cadastro que vai controlar os dados, logo jogamos os dados para outro componente
function FormularioCadastro({ aoEnviar, validarCPF }) {
	const [etapaAtual, setEtapaAtual] = useState(0); //Por enquanto está estática
	const [dadosColetados, setDados] = useState({});
	useEffect(() => {
		if (etapaAtual === formularios.length) {
			aoEnviar(dadosColetados);
		}
	});

	const formularios = [
		<DadosUsuario aoEnviar={coletarDados} />,
		<DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
		<DadosEntrega aoEnviar={coletarDados} />,
	];

	function coletarDados(dados) {
		setDados({ ...dadosColetados, ...dados });
		proximo();
	}

	function proximo() {
		setEtapaAtual(etapaAtual + 1);
	}

	return <>{formularios[etapaAtual]}</>;
}

export default FormularioCadastro;
