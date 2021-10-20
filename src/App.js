import "./styles.css";
import styled from "styled-components";
import SideMenu from "./components/SideMenu/SideMenu";
import Heading from "./components/Heading";
import FoodMenu from "./components/Food/FoodMenu";
import Menubar from "./components/PhoneMenu/MenuBar";

export default function App() {
  return (
    <Wrapper>
      <Menubar />
      <Menu>
        <SideMenu />
      </Menu>
      <Content>
        <Heading />
        <FoodMenu />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Menu = styled.div`
  flex: 1;
`;

const Content = styled.div`
  width: 100vw;
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
