import React from "react";
import styled from "styled-components";
import Carregando from "../../components/Animetion/index";

const HomeContainer = styled.section`
    width: 100%;
    min-height: 500px;
    background-color: #68e4fd;
    & > h1{
        font-size: 25px;
        text-align: center;
        padding: 10px;
    }
`;

const Home = () => {
    return (
        <HomeContainer>
            <h1>Home</h1>
            <Carregando />
        </HomeContainer>
    );
}

export default Home;
