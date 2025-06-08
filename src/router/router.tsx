import { Routes, Route } from "react-router-dom";
import { Home } from "../page/Home";
import MainContainer from "../style/geral";
import { ProjetPage } from "../page/Project";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { About } from "../page/about";
import { Skills } from "../page/Skills";
import { Projects } from "../page/Projects";

const Router = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/habilidades" element={<Skills />} />
          <Route path="/projetos" element={<Projects />} />
        </Route>
      </Routes>
    </MainContainer>
  );
};

export default Router;
