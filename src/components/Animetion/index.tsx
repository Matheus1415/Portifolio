import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import anime from 'animejs';

const CarregandoContainer = styled.div`
    color: white;
    width: 100vw;
    height: 400px;
    background-color: #6b83ff;
    position: absolute;
    top: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const quicarAnimation = (tempo: number) => keyframes`
    0% { transform: translateY(0); }
    100% { transform: translateY(-7px); }
`;

const Letra = styled.p<{ tempo: number }>`
    font-size: 50px;
    color: white;
    animation: ${({ tempo }) => quicarAnimation(tempo)} ${({ tempo }) => tempo}s alternate infinite;
`;

const Carregando = () => {
    const element = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (element.current) {
            anime({
                targets: element.current,
                opacity: [1, 1],
                duration: 5000,
                easing: 'easeInOutQuad',
            });
        }
    }, []);

    return (
        <CarregandoContainer ref={element}>
            <Letra tempo={0.5}>C</Letra>
            <Letra tempo={0.6}>A</Letra>
            <Letra tempo={0.7}>R</Letra>
            <Letra tempo={0.8}>R</Letra>
            <Letra tempo={0.9}>G</Letra>
            <Letra tempo={1.0}>A</Letra>
            <Letra tempo={1.1}>N</Letra>
            <Letra tempo={1.2}>D</Letra>
            <Letra tempo={1.3}>O</Letra>
            <Letra tempo={1.4}>.</Letra>
            <Letra tempo={1.5}>.</Letra>
            <Letra tempo={1.6}>.</Letra>
        </CarregandoContainer>
    );
};

export default Carregando;
