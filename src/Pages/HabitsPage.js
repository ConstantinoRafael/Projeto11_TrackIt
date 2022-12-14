import styled from "styled-components";
import { useUser } from "../context/User";
import NavBar from "../Components/NavBar";
import HeaderHabits from "../Components/HeaderHabits";
import NewHabits from "../Components/NewHabits";
import { useEffect, useState } from "react";
import axios from "axios";
import ListHabits from "../Components/ListHabits";
import { Link } from "react-router-dom";
import { useProgress } from "../context/Progress";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function HabitsPage() {
  const [createNewHabit, setCreateNewHabit] = useState(false);
  const [habitsList, setHabitList] = useState([]);
  const { progress } = useProgress(undefined);

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
        <p data-identifier="habit-page-action">Hábitos</p>
        <LogoHoje>
          <Link to={"/hoje"}>
            <CircularProgressbar
              value={progress}
              text={`Hoje`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#52b6ff",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
            />
          </Link>
        </LogoHoje>
        <Link data-identifier="historic-page-action" to={"/historico"}>
          <p>Histórico</p>
        </Link>
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

  a{
    text-decoration: none;
  }

  p {
    font-size: 18px;
    color: #52b6ff;
    margin: 0 30px;
    font-weight: 400;
  }
`;

const LogoHoje = styled.div`
  background-color: #52b6ff;
  width: 91px;
  height: 91px;
  border-radius: 46px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
