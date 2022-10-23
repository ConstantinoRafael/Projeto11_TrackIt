import styled from "styled-components";
import bolaAzul from "../assets/Images/BolaAzul.png";
import parteBranca from "../assets/Images/Vector.png";

import { useUser } from "../context/User";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import dayjs from "dayjs";
import ListToday from "../Components/ListToday";

const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

export default function HabitsPage() {
  const { user, setUser } = useUser(undefined);

  


  return (
    <TodayFull>
      <NavBar />

      <Main>
        <Header>
          <h2>{weekDays[dayjs().day()]}, {dayjs().format("DD/MM")}</h2>
          <p>Nenhum hábito concluído ainda</p>
        </Header>

        <ListToday />

        
      </Main>

      <Footer>
        <Link to={"/habitos"}>

        <p>Hábitos</p>
        </Link>
        
        <LogoHoje>
          <BolaAzul src={bolaAzul} alt="bola azul" />

          <ParteBranca src={parteBranca} alt="parte branca" />
          <p>Hoje</p>
        </LogoHoje>
        <p>Histórico</p>
      </Footer>
    </TodayFull>
  );
}

const TodayFull = styled.div`
  background-color: #e5e5e5;
  height: 747px;
  font-family: "Lexend Deca", sans-serif;
`;



const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 18px;
    color: #666666;
    margin: 29px 18px;
    line-height: 22px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin: 28px 18px;

  h2 {
    font-size: 23px;
    color: #126ba5;
  }
`;

const ContainerHabits = styled.div`
  width: 340px;
  height: 91px;
  background-color: #ffffff;
  margin: 0px auto 10px;
  border-radius: 5px;
  display: flex;
`;

const ContainerCheck = styled.div`
  width: 69px;
  height: 69px;
  background-color: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #ffffff;
  margin: auto 0px auto 32px;
`;

const HabitAndStatus = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 20px;
    color: #666666;
    margin: 15px 0px 8px 20px;
  }

  h4 {
    font-size: 20px;
    color: #666666;
  }
`;

const Footer = styled.div`
  width: auto;
  height: 70px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 18px;
    color: #52b6ff;
    margin: 0 30px;
    font-weight: 400;
  }
`;

const LogoHoje = styled.div`
  position: relative;
  left: -40px;
  bottom: -30px;
  display: flex;

  p {
    position: absolute;
    bottom: 70px;
    color: #ffffff;
  }
`;

const BolaAzul = styled.img`
  position: absolute;
  bottom: 25px;
`;
const ParteBranca = styled.img`
  position: absolute;
  bottom: 31px;
  left: 15px;
`;
