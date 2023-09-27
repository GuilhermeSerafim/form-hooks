import React, { useState } from "react";
import {
	Typography,
} from "@material-ui/core";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

//Esse formulario de cadastro que vai controlar os dados, logo jogamos os dados para outro componente
function FormularioCadastro({ aoEnviar, validarCPF }) {
	const [etapaAtual, setEtapaAtual] = useState(0); //Por enquanto está estática

	function proximo(){
		setEtapaAtual(etapaAtual+1)
	}
	
	//Essa função está aqui dentro, justamente para saber o que é o aoEnviare e o validarCPF
	function formularioAtual(etapa) {
		//Basicamente isso aqui é um menu condicional por numero
		switch (etapa) {
			case 0:
				return <DadosUsuario aoEnviar={proximo} />;
			case 1:
				return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF}/>;
			case 2:
				return <DadosEntrega />;
			default:
				return <Typography>Erro</Typography>;
		}
	}

	return (
		<>
			{formularioAtual(etapaAtual)}
		</>
	);
}

//<DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
//<DadosEntrega />
//<DadosUsuario />
export default FormularioCadastro;
