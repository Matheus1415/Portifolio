import React, { useState } from "react";
import styled from "styled-components";
import { IoMenu, IoClose } from "react-icons/io5";
import ItemMenu from "../ItemMenu";
import { FaHome } from "react-icons/fa";

const ContainerMenu = styled.div`
    position: relative;
    color: white;
`;

const MenuToggle = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1000;
    cursor: pointer;
`;

const MenuFixed = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100vh;
    background-color: #26263c;
    color: white;
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
    & > .list-ico{
        display: flex;
        gap: 10px;
        flex-direction: column;
    }
`;

const CloseButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    cursor: pointer;
`;

export const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prevState => !prevState);

    return (
        <ContainerMenu>
            <MenuToggle onClick={toggleMenu}>
                {isOpen ? <IoClose size={40} /> : <IoMenu size={60} />}
            </MenuToggle>
            <MenuFixed $isOpen={isOpen}>
                <CloseButton onClick={toggleMenu}>
                    <IoClose size={30} />
                </CloseButton>
                <div className="list-ico">
                    <ItemMenu icon={<FaHome />} route="/" title="Home"/>
                    <ItemMenu icon={<FaHome />} route="/manuntencao" title="Home"/>
                    <ItemMenu icon={<FaHome />} route="/manuntencao" title="Home"/>
                    <ItemMenu icon={<FaHome />} route="/manuntencao" title="Home"/>
                    <ItemMenu icon={<FaHome />} route="/manuntencao" title="Home"/>
                </div>                
            </MenuFixed>
        </ContainerMenu>
    );
};

