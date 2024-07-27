import React from "react";
import styled from "styled-components";
import { InteractiveFace } from "../../components/InteractiveFace";
import { Menu } from "../../components/Menu";

const Container = styled.section`
    min-height: 810px;
    width: 100%;
    max-width: 1200px;
    font-family: 'Roboto', sans-serif;
    
    background-color: #13131F;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }

    & > .box50 {
        color: white;
        width: 50%;
        min-height: 400px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 10px;

        & > h1 {
            font-size: 80px;
            & > span {
                color: #8257E6;
                &::selection{
                    color: white;
                    background-color: #8257e653;
                }
            }
            &::selection{
                background-color: #8257E6;
            }
        }

        & > h2 {
            font-size: 45px;
            font-family: 'Anton', sans-serif;
            &::selection{
                background-color: #8257E6;
            }
        }

        @media (max-width: 900px) {
            width: 100%;
            align-items: center;
            text-align: center; 
        }
    }
`;

const HomeContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;


const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Menu/>
            <Container>
                <div className="box50">
                    <h1>Olá, eu sou o <span>Matheus</span></h1>
                    <h2>Desenvolvedor full-stack</h2>
                </div>
                <div className="box50">
                    <InteractiveFace />
                </div>
            </Container>
            
        </HomeContainer>
    );
}

export default Home;
