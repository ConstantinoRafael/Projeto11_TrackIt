import styled from "styled-components";
import { GoCheck } from "react-icons/go";
import axios from "axios";
import { useUser } from "../context/User";
import { useEffect, useState } from "react";
import { useProgress } from "../context/Progress";

function OneHabitToday({
  user,
  id,
  name,
  currentSequence,
  highestSequence,
  done,
  checked,
  setChecked,
}) {
  function checkHabit() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    // console.log(id);

    const promise = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
      id,
      config
    );

    promise.then((res) => {
      checked === true ? setChecked(false) : setChecked(true);
    });

    promise.catch((err) => console.log("nao marcou"));

    setChecked(false);
  }
  console.log("to aqui");

  function uncheckHabit() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    // console.log(id);

    const promise = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
      id,
      config
    );

    promise.then((res) =>
      checked === true ? setChecked(false) : setChecked(true)
    );

    promise.catch((err) => console.log("nao marcou"));
  }

  return (
    <ContainerHabits data-identifier="today-infos">
      <HabitAndStatus>
        <h3>{name}</h3>
        <h4>Sequência atual: {currentSequence} dias</h4>
        <h4>Seu recorde: {highestSequence} dias</h4>
      </HabitAndStatus>

      {done === false ? (
        <ContainerCheck data-identifier="done-habit-btn" onClick={checkHabit}>
          <GoCheck />
        </ContainerCheck>
      ) : (
        <ContainerCheckGreen
          data-identifier="done-habit-btn"
          onClick={uncheckHabit}
        >
          <GoCheck />
        </ContainerCheckGreen>
      )}
    </ContainerHabits>
  );
}

export default function ListToday() {
  const { user, setUser } = useUser(undefined);
  const [todayHabitsList, setTodayHabitsList] = useState([]);
  const [checked, setChecked] = useState(false);
  const { progress, setProgress } = useProgress();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    promise.then((res) => {
      console.log(res.data);
      setTodayHabitsList(res.data);
    });

    promise.catch((err) => console.log(err.response.data));
  }, [checked, user.token, progress]);

  if (todayHabitsList.length === 0) {
    setProgress(0);
  } else {
    const arrayDone = todayHabitsList.filter((t) => t.done === true);

    const newProgress = (arrayDone.length / todayHabitsList.length) * 100;

    setProgress(newProgress);
  }

  return (
    <>
      {todayHabitsList.map((t) => (
        <OneHabitToday
          user={user}
          key={t.id}
          id={t.id}
          name={t.name}
          done={t.done}
          currentSequence={t.currentSequence}
          highestSequence={t.highestSequence}
          checked={checked}
          setChecked={setChecked}
        />
      ))}
    </>
  );
}

const ContainerHabits = styled.div`
  width: 340px;
  height: 91px;
  background-color: #ffffff;
  margin: 0px auto 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
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
  margin: auto 10px auto 32px;
  border-radius: 5px;
`;

const ContainerCheckGreen = styled.div`
  width: 69px;
  height: 69px;
  background-color: #8fc549;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #ffffff;
  margin: auto 10px auto 32px;
  border-radius: 5px;
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
    font-size: 13px;
    color: #666666;
    margin-left: 20px;
  }
`;
