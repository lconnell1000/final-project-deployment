import { useState } from "react";
import styled from "styled-components"
import { mobile } from "../responsive"
import { register } from "../redux/apiCalls";
import  {useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.8)),
     url(https://firebasestorage.googleapis.com/v0/b/again-store.appspot.com/o/register.jpg?alt=media&token=8e9df55e-5413-4e7f-811e-cca3cc76b1e4),
     center;
     display: flex;
     align-items: flex-start;
     justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 40px;
    background-color: transparent;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 25px 10px 0px 0px;
    padding: 5px;
`

const Agreement = styled.span`
    font-Size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 10px 15px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        register(dispatch, { username, email, password });
        history.push("/")
    };
  return (
    <Container>
        <Wrapper>
            <Title>Create An Account</Title>
            <Form>
                <Input placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                />
                <Input placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                />
                <Input placeholder= "Password" type="password"
                onChange={(e) => setPassword(e.target.value)}
                />
                <Agreement>
                    By creating an account, I consent to the processing
                    of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button onClick={handleClick} disabled={isFetching}>Create Account</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register