import { Routes, Route } from "react-router-dom";
import { Home } from "../page/Home";
import MainContainer from "../style/geral";
import { ProjetPage } from "../page/Project";
import { DefaultLayout } from "../layouts/DefaultLayout";

const Router = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/projeto/:id" element={<ProjetPage />} />
      </Routes>
    </MainContainer>
  );
};

export default Router;
