import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import MenuIcon from "./MenuIcon";

function Menubar(props) {
  return (
    <Wrapper>
      <Left>
        <MenuIcon />
      </Left>
      <Logo>
        <h1>Lorem</h1>
      </Logo>
      <Right>
        <ShoppingCartOutlined style={{ color: "red" }} />
      </Right>
    </Wrapper>
  );
}

export default Menubar;

const Wrapper = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 50px;
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
`;
