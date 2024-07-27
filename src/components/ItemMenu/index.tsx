import React from 'react';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';

interface ItemMenuProps {
    icon: React.ReactNode;
    route: string;
    title: string;
}

const ItemContainer = styled.div<{ $isActive: boolean }>`
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${props => (props.$isActive ? '#8257E6' : 'transparent')};
    color: ${props => (props.$isActive ? '#fff' : '#ccc')};
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #5f417c;
    }
`;

const IconWrapper = styled.div<{ $isActive: boolean }>`
    margin-right: 15px;
    color: ${props => (props.$isActive ? '#fff' : '#ccc')};
`;

const Title = styled.span`
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
`;

const ItemMenu: React.FC<ItemMenuProps> = ({ icon, route, title }) => {
    const location = useLocation();
    const isActive = location.pathname === route;

    return (
        <Link to={route} style={{ textDecoration: 'none' }}>
            <ItemContainer $isActive={isActive}>
                <IconWrapper $isActive={isActive}>
                    {icon}
                </IconWrapper>
                <Title>{title}</Title>
            </ItemContainer>
        </Link>
    );
};

export default ItemMenu;
