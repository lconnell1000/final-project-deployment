import styled from "styled-components"
import { mobile } from "../responsive"
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 1;
    margin: 2.5px;
    height: 70vh;
    position: relative;
    ${mobile({ height: "30vh" })}
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "50vh" })}
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    margin: 20px;
    color: #00FFFF;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: transparent;
    color: #00FFFF;
    cursor: pointer;
    font-size: 17.5px;
    font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.category}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem