import React from "react";
import styled from "styled-components";

const MenuButton = () => {
  return (
    <BtnContainer>
      <button>Cart</button>
    </BtnContainer>
  );
};

export default MenuButton;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & button {
    background-color: red;
    font-size: 16px;
    color: white;
    outline: none;
    border: none;
    margin: 20px 0;
    padding: 15px 40px;
    border-radius: 40px;
  }
`;
