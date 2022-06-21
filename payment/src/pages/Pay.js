import {useState, useEffect} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const KEY = "pk_test_51JHOH9SIOmxh4cAgZHfnZmZRwzH4grTzhX7a7lmSJWYXRDrnHj1pL3FZsL2tRbZpLuj2ZTO6X9ySqzAJZOT1arcI00xEL2mq7s";

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();

    const onToken = (token) => {
        setStripeToken(token);
        console.log(token);
    };

    useEffect(()=>{
        const makeRequest = async ()=>{
            try{
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment", {
                        tokenId:stripeToken.id,
                        amount:2000,
                    }
                );
                console.log(res.data);
                history.push("/success");
            } catch(err){
                console.log(err);
            }
        };

        stripeToken && makeRequest();
    }, [stripeToken, history]);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >

            {stripeToken ? (
                <span>Processing. Please wait...</span>
            ) : (
                <StripeCheckout 
                    name="BodyWrap" 
                    image="https://media.istockphoto.com/vectors/shirt-icon-vector-id874045548?k=20&m=874045548&s=612x612&w=0&h=EXMZ0NNv89qeaqIMJ1Sox2yD3NuA2zYHVabxjOMB7E0="
                    billingAddress
                    shippingAddress
                    description='Your total is $20'
                    amount = {2000}
                    token = { onToken }
                    stripeKey = {KEY}
                    >
                    <button
                        style={{
                            border: "none",
                            width: 120,
                            borderRadius: 5,
                            padding: "20px",
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "600",
                            cursor: "pointer"
                        }}
                        >
                        Pay Now
                    </button>
                </StripeCheckout> 
            )}
        </div>
    )
}

export default Pay;
