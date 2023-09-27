import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

//Esse formulario de cadastro que vai controlar os dados, logo jogamos os dados para outro componente
function FormularioCadastro({aoEnviar, validarCPF}) {
  return (
    <>
    <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
    <DadosUsuario/>
    </>
  )
}

export default FormularioCadastro;
