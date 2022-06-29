import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    filter: brightness(70%);

    ${mobile({ height: "30vh" })}
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    text-align: center;
`;

const Button = styled.button`
    border: 1px solid white;
    border-radius: 5px;
    padding: 10px;
    background-color: var(--darkred);
    color: white;
    font-weight: 200;
    letter-spacing: 2px;
    cursor: pointer;
`;

const CategoryItem = ({item}) => {
    return ( 
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
     );
}
 
export default CategoryItem;