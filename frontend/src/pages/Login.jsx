import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), 
        url(images/reg-background-grey.jpg) center;
    background-size: cover;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    border-radius: 5px;
    padding: 15px 20px;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--rouge);
    color: white;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        background-color: var(--virtualpink);
    }
`;

const Link = styled.a`
    margin: 10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Button>LOGIN</Button>
                <Link>Forgot Password?</Link>
                <Link>Create a new account.</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
