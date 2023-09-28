import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';
import { Container, Typography } from "@material-ui/core"
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
import {validarCPF, validarSenha} from './models/cadastro'


class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        {/* Usando a função padrão */}
        <FormularioCadastro aoEnviar={aoEnviarForm} />
        {/* Podemos optar por usar ou não um provedor de contexto em um componente,
        dependendo de suas necessidades. Às vezes, você pode querer apenas definir
        ações padrão para um contexto, mesmo que nenhum provedor seja usado. */}
        <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}>
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
