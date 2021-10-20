import react from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";
import SideMenuItem from "./SideMenuItem";

const SideMenu = () => {
  const menuData = [
    { text: "About", isActive: false },
    { text: "Services", isActive: true },
    { text: "Cusines", isActive: true },
    { text: "Gallary", isActive: true },
    { text: "Contact", isActive: true },
    { text: "Books", isActive: true }
  ];
  return (
    <Wrapper>
      <h1>Loren Isum</h1>
      <Container>
        {menuData.map((item) => {
          return <SideMenuItem isActive={item.isActive} text={item.text} />;
        })}
      </Container>
      <MenuButton />
    </Wrapper>
  );
};

export default SideMenu;

const Wrapper = styled.div`
  padding: 20px 30px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 900px) {
    display: none;
  }

  & h1 {
    text-align: start;
    margin: 20px 30px;
    font-size: 45px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
