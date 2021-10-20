import React from "react";
import styled from "styled-components";

const Paragraph = () => {
  return (
    <Wrapper>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmodtempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div />
    </Wrapper>
  );
};

export default Paragraph;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & p {
    width: 60%;
    color: grey;
    line-height: 25px;
  }
  & div {
    background-color: red;
    width: 20%;
    height: 5px;
    border-radius: 3px;
  }
`;
