import styled from "styled-components";


const Container = styled.div`
    height: 30px;
    background-color: darkgreen;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 400;
`;

const Announcement = () => {
  return (
    <Container>
        Welcome To Our New Website!
    </Container>
  )
}

export default Announcement