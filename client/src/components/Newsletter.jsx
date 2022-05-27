import { Send } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 15px;
`
const Decription = styled.div`
    font-size: 24px;
    font-weight: 350;
    margin-bottom: 15px;
    ${mobile({ textAlign: "center" })}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 15px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`
//in future want to have this feature working
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Decription>Register to get updates about your favourite products</Decription>
        <InputContainer>
        <Input placeholder="your email"/>
        <Button>
            <Send/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter