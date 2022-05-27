import { Facebook, Instagram, MailOutline, Phone, RoomOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 15px;
`
const Logo = styled.h1`

`
const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 30px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

`

const Center = styled.div`
    flex: 1;
    padding: 15px;
    ${mobile({ display: "none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;

`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 15px;
`
const Right = styled.div`
    flex: 1;
    padding: 15px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`
const ContactItem = styled.div`
    margin-bottom: 15px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 75%;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>AGAIN.</Logo>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quis reprehenderit facere laudantium aut. Sequi beatae quisquam aperiam et earum, odio quaerat, esse est cum corrupti culpa unde consectetur corporis.</Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
            <Link to ="/" style={{ textDecoration:"none", color:"black" }}>
            <ListItem>Home</ListItem>
            </Link>
            <Link to ="/cart" style={{ textDecoration:"none", color:"black" }}>
            <ListItem>Cart</ListItem>
            </Link>
            <Link to ="/register" style={{ textDecoration:"none", color:"black" }}>
            <ListItem>Register</ListItem>
            </Link>
            <Link to ="/login" style={{ textDecoration:"none", color:"black" }}>
            <ListItem>Login</ListItem>
            </Link>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <RoomOutlined style={{marginRight:"10px"}}/>9 Gothic Ave Stonyfell, SA 5066</ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>+61 423 633 515</ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/>fionaconnell1000@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer