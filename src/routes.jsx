import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Favorite from "./pages/favorite";
import Player from "./pages/player";
import NaoEncontrado from "./pages/NaoEcontrado/index";
import PaginaBase from "./pages/paginaBase";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NaoEncontrado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
