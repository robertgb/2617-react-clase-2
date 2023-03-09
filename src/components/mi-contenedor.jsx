import React from "react";
import { MiLista } from "./mi-lista";
import { MiParrafo } from "./mi-parrafo";
import MiTitulo from "./mi-titulo";

export const MiContenedor = ({ titulo, texto, mostrarSeparador }) => {
  return (
    <>
      <MiTitulo titulo={titulo} />
      {mostrarSeparador ? <hr /> : <>---</>} 
      <MiParrafo myText={texto} />
      <MiLista />
    </>
  );
};

MiContenedor.defaultProps = {
    texto: 'No se ha proporcionado un texto',
    mostrarSeparador: true
}