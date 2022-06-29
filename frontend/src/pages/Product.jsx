import "../starability-heartbeat.css";
import styled from "styled-components";
import {mobile} from '../responsive';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;

    ${mobile({ 
        padding: "10px",
        flexDirection: "column"
    })}
`

const ImgAndReviewsContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;

    ${mobile({ 
        height: "40vh"
    })}
`

const TinyImage = styled.img`
    width: 113px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
    margin: 5px 5px;

    ${mobile({ 
        width: "20vw",
        height: "20vw"
    })}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;

    ${mobile({ 
        padding: "10px"
    })}
`

const Title = styled.h1`
    font-weight: 200;

`

const Price = styled.div`
    font-weight: 100;
    font-size: 40px;
    margin: 20px 0px;
`

const Ratings = styled.div`
    margin: 20px 0px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;

    ${mobile({ 
        width: "100%"
    })}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;

`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mobile({ 
        width: "100%"
    })}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid var(--red);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid var(--maroonoak);
    border-radius: 5px;
    background-color: var(--deepclaret);
    color: var(--lightpink);
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;

    &:hover {
        background-color: var(--rouge);
        border: 2px solid var(--rouge);
    }
`

const Description = styled.p`
    margin: 20px 0px;
`

const ReviewContainer = styled.div`
    flex: 1;
    padding: 0px 10px;
    height: 450px;
    margin-right: 20px;
`

const Review = styled.div`
`

const ReviewForm = styled.div`
`

const RatingInput = styled.div`
`

const ReviewText = styled.textarea`
    display: block;
    width: 95%;
    border-radius: 5px;

`

const SpecificationContainer = styled.span`
    flex: 1;
    padding: 0px 10px;
`

const Specifications = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    min-height: 350px;
`

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgAndReviewsContainer>
                <Image src="../images/products/saree-mall-saree-mall-blazing-red-linen-blend-saree-989/Saree-mall-Red--Off-White-Ikat-Printed-Sarees-1.webp"/>
                <TinyImage src="../images/products/saree-mall-saree-mall-blazing-red-linen-blend-saree-989/Saree-mall-Red--Off-White-Ikat-Printed-Sarees-1.webp"/>
                <TinyImage src="../images/products/saree-mall-saree-mall-blazing-red-linen-blend-saree-989/Saree-mall-Red--Off-White-Ikat-Printed-Sarees-2.webp"/>
                <TinyImage src="../images/products/saree-mall-saree-mall-blazing-red-linen-blend-saree-989/Saree-mall-Red--Off-White-Ikat-Printed-Sarees-3.jpg"/>
                <TinyImage src="../images/products/saree-mall-saree-mall-blazing-red-linen-blend-saree-989/Saree-mall-Red--Off-White-Ikat-Printed-Sarees-4.webp"/>
            </ImgAndReviewsContainer>
            <InfoContainer>
                <Title>Saree Mall Blazing Red Linen Blend Saree</Title>
                <Price>989/-</Price>
                <Ratings>
                    <p class="starability-result" data-rating="4"></p>
                </Ratings>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="red"/>
                        <FilterColor color="pink"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveIcon />
                        <Amount>1</Amount>
                        <AddIcon />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>

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
            </InfoContainer>
        </Wrapper>
        <Wrapper> 
            <ReviewContainer className="scrollbar">
                <ReviewForm>
                    <RatingInput>
                        <h2>Rating:</h2>
                        
                        <fieldset class="starability-heartbeat">
                            <input type="radio" id="no-rate" class="input-no-rate" name="review[rating]" value="1" checked aria-label="No rating." />
                            <input type="radio" id="first-rate1" name="review[rating]" value="1" />
                            <label for="first-rate1" title="Terrible">1 star</label>
                            <input type="radio" id="first-rate2" name="review[rating]" value="2" />
                            <label for="first-rate2" title="Not good">2 stars</label>
                            <input type="radio" id="first-rate3" name="review[rating]" value="3" />
                            <label for="first-rate3" title="Average">3 stars</label>
                            <input type="radio" id="first-rate4" name="review[rating]" value="4" />
                            <label for="first-rate4" title="Very good">4 stars</label>
                            <input type="radio" id="first-rate5" name="review[rating]" value="5" />
                            <label for="first-rate5" title="Amazing">5 stars</label>
                        </fieldset>
                    </RatingInput>

                    <div>
                        <label for="review-body">Review Description:</label>
                        <ReviewText name="review[body]" id="review-body" cols="30" rows="3" required></ReviewText>
                    </div>
                </ReviewForm>
                <Review>
                    <Ratings>
                        <p class="starability-result" data-rating="5"></p>
                    </Ratings>
                    Greaty Quality. Absolutely recommended for anyone
                    who's looking for some desi style on the more
                    mischivieous end.
                </Review>
                <Review>
                    <Ratings>
                        <p class="starability-result" data-rating="1"></p>
                    </Ratings>
                    Terrible shade of red! I hate it. Looks great on the
                    model but looks awful in real life. Total loss.
                </Review>
                <Review>
                    <Ratings>
                        <p class="starability-result" data-rating="4"></p>
                    </Ratings>
                    Beginning to like this style of clothing. Keep more coming.
                </Review>
            </ReviewContainer>
            <SpecificationContainer>
                <h2>Specifications</h2>
                
                <Specifications>
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
            </SpecificationContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product
