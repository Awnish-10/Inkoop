// import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function Menubar(props) {
  return (
    <Wrapper>
      <Left></Left>
      <Logo>
        <h1>Lorem</h1>
      </Logo>
      <Right>{/* <ShoppingCartOutlined /> */}</Right>
    </Wrapper>
  );
}

export default Menubar;

const Wrapper = styled.div`
  display: none;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* padding: 5px 20px; */
  /* @media (max-width: 900px) {
    display: initial;
  } */
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Logo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: red;
`;
