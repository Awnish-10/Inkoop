import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Heading = () => {
  const foodItems = [
    {
      name: "mexican Taco",
      image:
        "https://images.pexels.com/photos/8448331/pexels-photo-8448331.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      name: "Farmhouse Pizza",
      image:
        "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      name: "Chicken Burger",
      image:
        "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      name: "Loded Nachos",
      image:
        "https://images.pexels.com/photos/6605308/pexels-photo-6605308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      name: "Hakka Noodles",
      image:
        "https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ];
  return (
    <Wrapper>
      {foodItems.map((item) => {
        return <Card name={item.name} image={item.image} />;
      })}
    </Wrapper>
  );
};

export default Heading;

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
