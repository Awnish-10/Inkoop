import React from "react";
import styled from "styled-components";

const Heading = (props) => {
  return (
    <Wrapper>
      <Image alt="" src={props.image}></Image>
      <h3>{props.name}</h3>
    </Wrapper>
  );
};

export default Heading;

const Wrapper = styled.div`
  height: 200px;
  width: 150px;
  margin: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Image = styled.img`
  margin-top: 20px;
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;
