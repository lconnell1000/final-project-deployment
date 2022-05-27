import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";



const Container = styled.div`

`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`
const ImgContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "55vh" })}
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 40px;
  flex-direction: column;
  ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
  font-weight: 200;
`
const Description = styled.p`
  margin: 20px 0px;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 35px;
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`
const Filter = styled.div`
  display: flex;
  align-item: center;
`
const FilterTitle = styled.span`
  font-size: 20px
  font-weight: 200;
`
const FilterSize = styled.select`
  margin-left: 15px;
  padding: 5px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`
const AmountConatiner = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`
const Button = styled.button`
  padding: 15px;
  border: 2.5px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 550;

  &:hover{
    background-color: teal;
  }
`
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const[product,setProduct] = useState({});
  const[quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const sizeValue =  size || (product.size && product.size[0]);

  useEffect(()=>{
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data)
      }catch{}
    }
    getProduct();
  },[id]);

  const handleQuantity = (type) => {
    if (type === "dec" ){
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, size: sizeValue })
    );

  
  };
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <ImgContainer>
          <Image src={product.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Description>
              {product.description}
            </Description>
            <Price>$ {product.price}
            </Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize value={sizeValue} onChange={(e) => setSize(e.target.value)}>
                  {product.size?.map((s) => (
                   <FilterSizeOption key={s}>{s}</FilterSizeOption> 
                  ))} 
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountConatiner>
                <Remove onClick={() => handleQuantity("dec")} />
                <Amount>{quantity}</Amount>
                <Add  onClick={() => handleQuantity("inc")} />
              </AmountConatiner>
              <Button onClick={handleClick}>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product