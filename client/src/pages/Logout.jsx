
import styled from "styled-components";
import { mobile } from "../responsive";
import { logout } from "../redux/userRedux";
import { useDispatch, useSelector } from "react-redux";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.8)
    ),
    url(https://firebasestorage.googleapis.com/v0/b/again-store.appspot.com/o/goodbye2.jpg?alt=media&token=960ed77b-b5d8-42d4-a271-57a9c008b476),
    center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
  width: 25%;
  padding: 40px;
  background-color: transparent;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  padding: 25px;
`;



const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
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



const Logout = () => {
  const dispatch = useDispatch();
 

  const logOut = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <Container>
      <Wrapper>
        <Title>Log Out</Title>

        <Button onClick={logOut}>
          Log out
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Logout;
