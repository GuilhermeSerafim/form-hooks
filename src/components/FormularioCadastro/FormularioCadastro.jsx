import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

//Esse formulario de cadastro que vai controlar os dados, logo jogamos os dados para outro componente
function FormularioCadastro({ aoEnviar, validarCPF }) {
	const [etapaAtual, setEtapaAtual] = useState(0); //Por enquanto está estática

	const formularios = [
		<DadosUsuario aoEnviar={proximo} />,
		<DadosPessoais aoEnviar={proximo} />,
		<DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />
	];

	function proximo() {
		setEtapaAtual(etapaAtual + 1);
	}

	return <>{formularios[etapaAtual]}</>;
}

export default FormularioCadastro;
