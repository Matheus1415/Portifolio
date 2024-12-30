import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home  from "../page/Home";
import MainContainer from "../style/geral";
import { ProjetPage } from "../page/Project";

const AppRouter = () => {
    return (
        <Router>
            <MainContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projeto/:id" element={<ProjetPage/>} />
                </Routes>
            </MainContainer>
        </Router>
    );
}

export default AppRouter;
