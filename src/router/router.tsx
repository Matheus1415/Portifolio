import { Routes, Route } from "react-router-dom";
import { Home } from "../page/Home";
import { DefaultLayout } from "../layouts/DefaultLayout";

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
  );
};

export default Router;
