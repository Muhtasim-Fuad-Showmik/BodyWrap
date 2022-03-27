import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
`

const InfoContainer = styled.div`
    flex: 1;
`

const Title = styled.h1``

const Price = styled.div``

const Ratings = styled.div``

const Description = styled.p``

const Specifications = styled.span``

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="images/products/saree-mall-saree-mall-blazing-red-linen-blend-saree-989/Saree-mall-Red--Off-White-Ikat-Printed-Sarees-1.webp"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Saree Mall Blazing Red Linen Blend Saree</Title>
                <Price>989/-</Price>

                <Ratings>
                    4/5
                </Ratings>

                <Description>
                    <p>100% Original Products</p>
                    <p>Pay on delivery might be available</p>
                    <p>Easy 30 days returns and exchanges</p>

                    <h2>Product Details</h2>
                    <p>
                        Impress your friends and family by donning this chic-looking 
                        saree to an upcoming function. Boasting a beautiful 
                        geometric pattern with a printed border, it also sports a 
                        ikat print for added appeal.
                    </p>

                    <p>Blazing red printed saree</p>
                    <p>Lovely geometric pattern</p>
                    <p>Beautiful printed border</p>
                    <p>Linen blend blouse piece</p>
                    <p>Linen blend, machine wash</p>

                    <p>The saree comes with an unstitched blouse piece</p>
                    <p>
                        The blouse worn by the model might be for modelling purpose only. 
                        Check the image of the blouse piece to understand how the 
                        actual blouse piece looks like.
                    </p>

                    <h2>Trend Alert</h2>

                    <p>
                        Lending an artsy-boho vibe, indie prints are a contemporary twist 
                        to existing textiles and techniques. Crafted by independent artists 
                        and designers, indie prints blend ethnic motifs and patterns with a 
                        mix of bold and neutral hues to create a unique, chic look.
                    </p>

                    <h2>Size & Fit</h2>

                    <p>Length: 5.5 metres plus 0.8 metre (80 cm) blouse piece</p>
                    <p>Width: 1.06 metres (approx.)</p>

                    <h2>Material & Care</h2>

                    <p>Saree fabric: Linen Blend</p>
                    <p>Blouse fabric: Linen Blend</p>
                    <p>Machine wash</p>
                </Description>
                <Specifications>
                    <h2>Specifications</h2>

                    <h3>Type</h3>
                    <div>Ikat</div>

                    <h3>Occassion</h3>
                    <div>Traditional</div>
                    
                    <h3>Blouse Fabric</h3>
                    <div>Linen Blend</div>
                    
                    <h3>Saree Fabric</h3>
                    <div>Linen Blend</div>
                    
                    <h3>Print or Pattern Type</h3>
                    <div>Geometric</div>
                    
                    <h3>Border</h3>
                    <div>Printed</div>
                    
                    <h3>Blouse</h3>
                    <div>Blouse Piece</div>
                    
                    <h3>Wash Care</h3>
                    <div>Machine Wash</div>
                </Specifications>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product
