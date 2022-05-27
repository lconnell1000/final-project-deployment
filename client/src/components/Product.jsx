import { FavoriteBorderOutlined, Search, ShoppingCartRounded } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Info = styled.div `
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s ease;
    cursor: pointer;
`

const Container = styled.div `
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Image = styled.img `
    height: 75%;
    z-index: 2;
`

const Icon = styled.div `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition:all 0.2s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.25);
    }
`
const Product = ({item}) => {

  return (
    <Container>
        <Image src = {item.img}/>
        <Info>
            <Icon>
                <ShoppingCartRounded/>
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`}>
                <Search/>
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product