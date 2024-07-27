import React, { useRef, useEffect } from "react";
import styled from "styled-components"; 
const Face = styled.div`
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 500px;
    background: url(/animatePessoa.jpg) no-repeat center center;
    background-size:cover;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Eye = styled.div`
    position: absolute;
    top: 100%;
    left: 120px;
    transform: translate(150px, 135px);
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Pupil = styled.div`
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
    position: relative;
`;

export const InteractiveFace: React.FC = () => {
    const leftEyeRef = useRef<HTMLDivElement>(null);
    const rightEyeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;

            const updateEyePosition = (eye: HTMLDivElement, pupil: HTMLDivElement) => {
                const eyeRect = eye.getBoundingClientRect();
                const eyeX = eyeRect.left + eyeRect.width / 2;
                const eyeY = eyeRect.top + eyeRect.height / 2;

                const radian = Math.atan2(clientX - eyeX, clientY - eyeY);
                const angle = (radian * 180) / Math.PI * -1 + 90;

                pupil.style.transform = `rotate(${angle}deg) translateX(10px)`;
            };

            if (leftEyeRef.current && leftEyeRef.current.children[0]) {
                updateEyePosition(leftEyeRef.current, leftEyeRef.current.children[0] as HTMLDivElement);
            }

            if (rightEyeRef.current && rightEyeRef.current.children[0]) {
                updateEyePosition(rightEyeRef.current, rightEyeRef.current.children[0] as HTMLDivElement);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <Face>
            <Eye ref={leftEyeRef} style={{ left: '50px', top: '75px' }}>
                <Pupil />
            </Eye>
            <Eye ref={rightEyeRef} style={{ right: '50px', top: '75px' }}>
                <Pupil />
            </Eye>
        </Face>
    );
};