import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home  from "../page/Home";
import MainContainer from "../style/geral";

const AppRouter = () => {
    return (
        <Router>
            <MainContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </MainContainer>
        </Router>
    );
}

export default AppRouter;
