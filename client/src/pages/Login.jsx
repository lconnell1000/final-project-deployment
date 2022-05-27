import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { login } from "../redux/apiCalls";
import  {useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.8)),
     url(https://firebasestorage.googleapis.com/v0/b/again-store.appspot.com/o/login.jpg?alt=media&token=910dda4c-7380-41a9-b8b9-0f8431461325),
     center;
     display: flex;
     align-items: flex-start;
     justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 40px;
    background-color: transparent;
    ${mobile({ width: "75%" })}
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
    padding: 5px;
`;


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 10px 15px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`;

// const Link = styled.a`
//     margin: 5px 0px;
//     font-size: 12px;
//     text-decoration: underline;
//     cursor: pointer;
// `;

const Error = styled.span`
  color: red;
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };


  return (
    
        <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                />
                <Input 
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleClick} disabled={isFetching}>
                    Log In
                </Button>
                {error && <Error>Something went wrong...</Error>}
                <Link to="/register">Create a New Account</Link>
            </Form>
        </Wrapper>
    </Container>
    
  )
}

export default Login