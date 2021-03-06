import styled from "styled-components";
import {mobile} from '../responsive';
import Announcement from "../components/Announcement";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`
    width: 100%;
`;

const Wrapper = styled.div`
    padding: 20px;

    ${mobile({ 
        padding: "10px"
    })}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 2px;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};

    ${mobile({ 
        margin: "0px 10px"
    })}
`

const TopTexts = styled.div`
    ${mobile({ 
        display: "none"
    })}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
    ${mobile({ 
        flexDirection: "column"
    })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({ 
        flexDirection: "column"
    })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;

    ${mobile({ 
        flexDirection: "column"
    })}
`;

const Image = styled.img`
    min-width: 200px;
    min-height: 200px;
    width: 200px;
    height: 200px;
    object-fit: cover;

    ${mobile({ 
        width: "90vw",
        height: "90vw"
    })}
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;

    ${mobile({ 
        margin: "5px 15px"
    })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;

    ${mobile({ 
        marginBottom: "20px"
    })}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: var(--rouge);
    border: 1px solid var(--deepclaret);
    border-radius: 5px;
    color: white;
    font-weight: 600;
    letter-spacing: 2px;

    &:hover {
        background-color: var(--virtualpink);
        border: 1px solid var(--virtualpink);
    }
`;

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
            <Wrapper>
                <Title>Your Bag</Title>
                <TopContainer>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </TopContainer>
                <BottomContainer>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="images/products/saree-mall-saree-mall-blazing-red-linen-blend-saree-989/Saree-mall-Red--Off-White-Ikat-Printed-Sarees-1.webp" />
                                <Details>
                                    <ProductName><b>Product: Saree Mall Red Saree</b></ProductName>
                                    <ProductId><b>ID:</b> 93813718293</ProductId>
                                    <ProductColor color="red" />
                                    <ProductSize><b>Size: </b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon />
                                    <ProductAmount>2</ProductAmount>
                                    <RemoveIcon />
                                </ProductAmountContainer>
                                <ProductPrice>989/-</ProductPrice>
                            </PriceDetail>
                        </Product>

                        <Hr />

                        <Product>
                            <ProductDetail>
                                <Image src="images/products/saree-mall-mauve-&-red-organza-block-print-saree-1294/Saree-mall-Mauve-Red-Organza-Block-Print-Saree-3.jpg" />
                                <Details>
                                    <ProductName><b>Product: Saree Mall Mauve & Red Saree</b></ProductName>
                                    <ProductId><b>ID:</b> 93813718205</ProductId>
                                    <ProductColor color="pink" />
                                    <ProductSize><b>Size: </b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon />
                                    <ProductAmount>1</ProductAmount>
                                    <RemoveIcon />
                                </ProductAmountContainer>
                                <ProductPrice>1294/-</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>    
                            <SummaryItemPrice>1294/-</SummaryItemPrice>
                        </SummaryItem>
                        
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>    
                            <SummaryItemPrice>70/-</SummaryItemPrice>
                        </SummaryItem>   

                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>    
                            <SummaryItemPrice>-200/-</SummaryItemPrice>
                        </SummaryItem>   

                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>    
                            <SummaryItemPrice>1294/-</SummaryItemPrice>
                        </SummaryItem>
                        
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </BottomContainer>
            </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart
