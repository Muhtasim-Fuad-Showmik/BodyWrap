import "../starability-heartbeat.css";
import styled from "styled-components";
import {mobile} from '../responsive';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

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
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();
    
    useEffect(() => {
        const getProduct = async () => {
            try{
                const res = await publicRequest.get("products/find/" + id);
                setProduct(res.data);
            } catch{}
        };
        getProduct();
    }, [id])

    const handleQuantity = (type) => {
        if(type === "dec"){
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }

    const handleClick = () => {
        //Update the shopping cart
        dispatch(addProduct({ ...product, quantity, color, size }));
    }

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgAndReviewsContainer>
                    <Image src={product && product.img && "../" + product.img[0][Object.keys(product.img[0])[0]][0] } />

                    {product && product.img && product.img[0][Object.keys(product.img[0])[0]].slice(1)?.map(item => (
                        <TinyImage src={"../" + item} key={item}/>    
                    ))}
                </ImgAndReviewsContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Price>{product.price}/-</Price>
                    <Ratings>
                        <p className="starability-result" data-rating="4"></p>
                    </Ratings>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map(c => (
                                <FilterColor color={c} key={c} onClick={()=>setColor(c)} />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e)=>setSize(e.target.value)}>
                                {product.size?.map(s => (
                                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon onClick={()=>handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <AddIcon onClick={()=>handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>

                    <Description contentEditable='true' dangerouslySetInnerHTML={{__html: `<p>By <strong>${product.brand}</strong></p>` + product.desc?.substring(0, product.desc.indexOf("Specifications")-1)}}>
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
                            <p className="starability-result" data-rating="5"></p>
                        </Ratings>
                        Greaty Quality. Absolutely recommended for anyone
                        who's looking for some desi style on the more
                        mischivieous end.
                    </Review>
                    <Review>
                        <Ratings>
                            <p className="starability-result" data-rating="1"></p>
                        </Ratings>
                        Terrible shade of red! I hate it. Looks great on the
                        model but looks awful in real life. Total loss.
                    </Review>
                    <Review>
                        <Ratings>
                            <p className="starability-result" data-rating="4"></p>
                        </Ratings>
                        Beginning to like this style of clothing. Keep more coming.
                    </Review>
                </ReviewContainer>
                <SpecificationContainer>
                    <h2>Specifications</h2>
                    
                    <Specifications contentEditable='true' dangerouslySetInnerHTML={{__html: product.desc?.substring(product.desc.indexOf("Specifications") + 19)}}>
                    </Specifications>
                </SpecificationContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
