import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div`
`
const Title = styled.h1`
    margin: 15px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 5px;
    ${mobile({ margin: "10px 0px" })}
`
const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>{category}</Title>
        <FilterContainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name="colour" onChange={handleFilters}>
            <Option disabled>
                Colour/Dying-Method
            </Option>
            <Option>red</Option>
            <Option>floral</Option>
            <Option>white</Option>
            <Option>orange</Option>
            <Option>yellow</Option>
            <Option>pink</Option>
            <Option>brown</Option>
            <Option>black</Option>
            <Option>teal</Option>
            <Option>gold</Option>
            <Option>blue</Option>
            <Option>avocado</Option>
            <Option>eucalyptus</Option>
            </Select>
            <Select name ="size" onChange={handleFilters}>
            <Option disabled>
                Size
            </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>8</Option>
            <Option>10</Option>
            <Option>12</Option>
            <Option>14</Option>
            <Option>n/a</Option>
            </Select>
        </Filter>
        <Filter>
        <FilterText>Sort Products:</FilterText>
        <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (Low to High)</Option>
            <Option value="desc">Price (High to Low)</Option>
        </Select>
        </Filter>
        </FilterContainer>
        <Products category={category} filters={filters} sort={sort} />
        <Newsletter />
        <Footer />
    </Container>
  );
};

export default ProductList;