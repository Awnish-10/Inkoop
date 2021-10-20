import React from "react";
import styled from "styled-components";
import Paragraph from "./Paragraph";

const Heading = () => {
  return (
    <Wrapper>
      <Head>What are you having for Lunch? </Head>
      <Desc>
        <Paragraph />
      </Desc>
    </Wrapper>
  );
};

export default Heading;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Head = styled.h1`
  flex: 2;
  text-align: start;
  font-size: 80px;

  padding: 10px 20px;
`;

const Desc = styled.div`
  flex: 1;
  padding: 10px;
`;
