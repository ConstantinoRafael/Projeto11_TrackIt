import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import dayjs from "dayjs";
import ListToday from "../Components/ListToday";
import { useProgress } from "../context/Progress";

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const weekDays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

export default function HabitsPage() {
  const { progress } = useProgress(undefined);

  return (
    <TodayFull>
      <NavBar />

      <Main>
        <Header>
          <h2 data-identifier="today-infos">
            {weekDays[dayjs().day()]}, {dayjs().format("DD/MM")}
          </h2>

          {progress === 0 ? (
            <p data-identifier="today-infos">Nenhum hábito concluído ainda</p>
          ) : (
            <h5 data-identifier="today-infos">
              {progress}% dos hábitos concluídos
            </h5>
          )}
        </Header>
        <ListToday />
      </Main>

      <Footer>
        <Link to={"/habitos"}>
          <p data-identifier="habit-page-action">Hábitos</p>
        </Link>

        <LogoHoje>
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
        </LogoHoje>
        <Link data-identifier="historic-page-action" to={"/historico"}>
          <p>Histórico</p>
        </Link>
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

  h5 {
    font-size: 18px;
    color: #8fc549;
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

  a {
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
