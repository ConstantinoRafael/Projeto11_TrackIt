import styled from "styled-components";
import { useUser } from "../context/User";

export default function NavBar() {
  const { user, setUser } = useUser(undefined);
  return (
    <>
      <Header>
        <Logo>TrackIt</Logo>
        <ProfileImg src={user.image} alt="imagem de perfil" />
      </Header>
    </>
  );
}

const Header = styled.div`
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
