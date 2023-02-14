import React from "react";
import Cabecalho from "./../../components/cabecalho";
import FavoritosProvider from "../../contexts/Favorito";
import Container from "./../../components/container";
import { Outlet } from "react-router-dom";
import Rodape from "./../../components/rodape";

const PaginaBase = () => {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />/
    </main>
  );
};

export default PaginaBase;
