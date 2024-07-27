import React from "react";
import styled from "styled-components";
import { InteractiveFace } from "../../components/InteractiveFace";
import { Menu } from "../../components/Menu";

const Container = styled.section`
    min-height: 810px;
    width: 100%;
    max-width: 1200px;    
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
                    background-color: transparent;
                    text-shadow: 
                        0 0 5px #fff,
                        0 0 10px #fff,
                        0 0 20px #ff00ff,
                        0 0 30px #ff00ff,
                        0 0 40px #ff00ff,
                        0 0 50px #ff00ff,
                        0 0 60px #ff00ff;
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
    font-family: 'Roboto', sans-serif;
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    & > .sobre{
        width: 100%;
        min-height: 810px;
        background-color: #1f1f33;
        display: flex;
        justify-content: center;
        & > .boxSobre{
            padding: 20px;
            width: 100%;
            max-width: 50%;
            min-height: 400px;
            text-align: center;
            & > h1{
                font-size: 60px;
                font-weight: bolder;
                &::selection{
                    color: white;
                    background-color: transparent;
                    text-shadow: 
                        0 0 5px #fff,
                        0 0 10px #fff,
                        0 0 20px #ff00ff,
                        0 0 30px #ff00ff,
                        0 0 40px #ff00ff,
                        0 0 50px #ff00ff,
                        0 0 60px #ff00ff;
                }
            }
            & > p{
                font-family: 'Inter', sans-serif;
                font-size: 24px;
                text-align: justify;
                padding: 15px;
                line-height: 2;
                &::selection{
                    background-color: #8257E6;
                }
            }

            & > .destaque{
                font-family: 'Playwrite AR', serif;
                &::selection{
                    background-color: #8257E6;
                }
            }
        }  

        & > .boxSobreImage{
            width: 100%;
            max-width: 50%;
            height: 810px;
            background: url(/bgSobre.png) no-repeat center center;
            background-size: cover;
        }   
    }

    & > .habilidade{
        width: 100%;
        min-height: 610px;
        background: url(/bgHabilidade.jpg) no-repeat center center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
    
        & > .wraperSobre{
            max-width: 900px;
            padding: 10px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 40px;

            & > .boxHabilidade {
            background-color: #201E1E;
            color: #8257E6;
            padding: 10px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-size: 30px;
            width: 100%;
            max-height: 170px;
            max-width: 150px;
            box-shadow: 
                        0 0 5px #2d2d2d,
                        0 0 10px #000000,
                        0 0 20px #000000;
            & > img {
                width: 100%;
                max-width: 80px;
            }
        }
        }
    }
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
            <div className="sobre">
                <div className="boxSobre">
                    <h1>Quem sou eu?</h1>
                    <p>Olá, me chamo Matheus, um desenvolvedor apaixonado por tecnologia e inovação. Desde dos meus 15 anos, tenho dedicado minha carreira a criar soluções tecnológicas que fazem a diferença.</p>
                    <p>Minha jornada no mundo do desenvolvimento começou com uma curiosidade insaciável e uma vontade de entender como as coisas funcionam, como aquilo era criado e como se cria essas inovações.</p>
                    <p className="destaque">Hoje, transformo ideias em realidade através de código limpo e eficiente.</p>
                </div>
                <div className="boxSobreImage"></div>
            </div>

            <div className="habilidade">
                <div className="wraperSobre">
                    <div className="boxHabilidade">
                        <p>HTML</p>
                        <img src="/html.jpg" alt="" />
                    </div>
                    <div className="boxHabilidade">
                        <p>CSS</p>
                        <img src="/cs.jpg" alt="" />
                    </div>
                    <div className="boxHabilidade">
                        <p>MYSQL</p>
                        <img src="/mysql.jpg" alt="" />
                    </div>
                    <div className="boxHabilidade">
                        <p>TEYPSCRIPT</p>
                        <img src="/ts.jpg" alt="" />
                    </div>
                    <div className="boxHabilidade">
                        <p>JAVASCRIPT</p>
                        <img src="/js.jpg" alt="" />
                    </div>
                    <div className="boxHabilidade">
                        <p>SASS</p>
                        <img src="/sass.jpg" alt="" />
                    </div>
                    <div className="boxHabilidade">
                        <p>REACT</p>
                        <img src="/react.jpg" alt="" />
                    </div>
                    <div className="boxHabilidade">
                        <p>LARAVEL</p>
                        <img src="/laravel.jpg" alt="" />
                    </div>
                    <div className="boxHabilidade">
                        <p>PHP</p>
                        <img src="/php.jpg" alt="" />
                    </div>
                </div>
            </div>
        </HomeContainer>
    );
}

export default Home;
