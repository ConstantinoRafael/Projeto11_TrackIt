import styled from "styled-components";

export default function HabitsPage() {
  return (
    <Habits>
      <NavBar>
        <Logo>TrackIt</Logo>
        <ProfileImg
          src="https://vandal-us.s3.amazonaws.com/spree/products/5e1b58e51d60270590082ed2/original/uploads_2F1578850455676-eudb7hqfbnn-a1f1b0a72e433a7450580e11b8c156c5_2FB1199B58-471D-4555-9082-6EB04AB3D029.jpg"
          alt="imagem de perfil"
        />
      </NavBar>

      <Footer>
        <p>Hábitos</p>
        <p>Histórico</p>
      </Footer>


    </Habits>
  );
}

const Habits = styled.div`
  background-color: #e5e5e5;
  height: 800px;
`;

const NavBar = styled.div`
  width: auto;
  height: 70px;
  background-color: #126ba5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const Logo = styled.h1`
  font-family: "Playball", cursive;
  color: #ffffff;
  font-size: 39px;
  font-weight: 400;
  margin-left: 18px;
`;

const ProfileImg = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 26px;
  margin-right: 18px;
`;

const Footer = styled.div`
    width: auto;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`