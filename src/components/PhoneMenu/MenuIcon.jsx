import React from "react";
import styled from "styled-components";

const MenuIcon = () => {
  return (
    <Wrapper>
      <Line length="16px" />
      <Line length="22px" />
      <Line length="19px" />
    </Wrapper>
  );
};

export default MenuIcon;

const Wrapper = styled.div`
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Line = styled.div`
  background-color: red;
  height: 3px;
  border-radius: 2px;
  margin-bottom: 2px;
  width: ${(props) => props.length};
`;
