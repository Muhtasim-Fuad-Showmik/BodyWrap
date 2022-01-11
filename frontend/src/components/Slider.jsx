import styled from "styled-components";
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction == "left" && "10px"};
    right: ${props => props.direction == "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`

const Wrapper = styled.div`
    height: 100%;
`

const Slide = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    width: 100%
`

const InfoContainer = styled.div`
    flex: 1;
`

const Title = styled.h1`
    font-size: 70px;
`

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    return ( 
        <Container>
            <Arrow direction="left">
                <KeyboardArrowLeft></KeyboardArrowLeft>
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src="images/frock-woman-front-slider-1-whitebgbarely.jpg" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <KeyboardArrowRight></KeyboardArrowRight>
            </Arrow>
        </Container>
     );
}
 
export default Slider;