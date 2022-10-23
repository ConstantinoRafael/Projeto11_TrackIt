import styled from "styled-components";
import bolaAzul from "../assets/Images/BolaAzul.png";
import parteBranca from "../assets/Images/Vector.png";

import { useUser } from "../context/User";
import NavBar from "../Components/NavBar";
import HeaderHabits from "../Components/HeaderHabits";
import NewHabits from "../Components/NewHabits";
import { useEffect, useState } from "react";
import axios from "axios";
import ListHabits from "../Components/ListHabits";
import { Link } from "react-router-dom";

export default function HabitsPage() {
  const [createNewHabit, setCreateNewHabit] = useState(false);
  const [habitsList, setHabitList] = useState([]);

  return (
    <HabitsFull>
      <NavBar />

      <Main>
        <HeaderHabits
          createNewHabit={createNewHabit}
          setCreateNewHabit={setCreateNewHabit}
        />

        {createNewHabit === true ? (
          <NewHabits
            createNewHabit={createNewHabit}
            setCreateNewHabit={setCreateNewHabit}
            habitsList={habitsList}
            setHabitList={setHabitList}
          />
        ) : (
          ""
        )}

        <ListHabits />
      </Main>

      <Footer>
        <p>Hábitos</p>
        <LogoHoje>
          <BolaAzul src={bolaAzul} alt="bola azul" />

          <ParteBranca src={parteBranca} alt="parte branca" />
          <Link to={"/hoje"}>
            <p>Hoje</p>
          </Link>
        </LogoHoje>
        <p>Histórico</p>
      </Footer>
    </HabitsFull>
  );
}

const HabitsFull = styled.div`
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
