import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

console.log(mobile({backgroundColor: "teal" }));

const Container = styled.div`
    height: 60px;

    ${mobile({ height: "50px", paddingBottom: "5px" })}
`

const Wrapper = styled.div`
    height: 50px;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;

    ${mobile({ display: "none" })}
`

const SearchContainer = styled.span`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;

    ${mobile({ width: "50px" })}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;

    ${mobile({ fontSize: "20px", marginLeft: "10px" })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${mobile({ justifyContent: "center", flex: "2" })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;

    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
    return ( 
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN    
                    </Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <SearchIcon style={{color: "gray", fontSize:16}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        BodyWrap
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
     );
}

export default Navbar;