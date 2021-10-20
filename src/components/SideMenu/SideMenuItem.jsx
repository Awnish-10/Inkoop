import React from "react";
import styled from "styled-components";

const SideMenuItem = (props) => {
  // console.log("working");
  return <Item isActive={props.isActive}>{props.text}</Item>;
};

export default SideMenuItem;

const Item = styled.p`
  text-decoration: ${(props) => (props.isActive ? "none" : "line-through")};
  text-decoration-color: red;
  margin: 20px 40px;
  color: grey;
`;
