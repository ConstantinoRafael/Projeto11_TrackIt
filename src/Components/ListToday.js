import styled from "styled-components";
import { GoCheck } from "react-icons/go";
import axios from "axios";
import { useUser } from "../context/User";
import { useEffect, useState } from "react";

function OneHabitToday({
  user,
  id,
  name,
  currentSequence,
  highestSequence,
  done,
  setChecked,
}) {
  function checkHabit() {
    const body = {
      id: id,
      name: name,
      currentSequence: currentSequence,
      highestSequence: highestSequence,
    }

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    // console.log(id);

    const promise = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
      body,
      config
    );

    promise.then((res) => setChecked(true));

    promise.catch((err) => console.log("nao marcou"));
  }

  function uncheckHabit() {
    const body = {
      id: id,
      name: name,
      currentSequence: currentSequence,
      highestSequence: highestSequence,
    }

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    // console.log(id);

    const promise = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
      body,
      config
    );

    promise.then((res) => setChecked(false));

    promise.catch((err) => console.log("nao marcou"));
  }

  return (
    <ContainerHabits>
      <HabitAndStatus>
        <h3>{name}</h3>
        <h4>Sequência atual:{currentSequence} dias</h4>
        <h4>Seu recorde:{highestSequence} dias</h4>
      </HabitAndStatus>

      {done === false ? (
        <ContainerCheck onClick={checkHabit}>
          <GoCheck />
        </ContainerCheck>
      ) : (
        <ContainerCheckGreen onClick={uncheckHabit}>
          <GoCheck />
        </ContainerCheckGreen>
      )}
    </ContainerHabits>
  );
}

export default function ListToday() {
  const { user, setUser } = useUser(undefined);
  const [todayHabitsList, setTodayHabitsList] = useState([]);
  const [checked , setChecked ] = useState(false)

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
  }, [checked, user.token]);

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
  margin: auto 0px auto 32px;
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
    font-size: 20px;
    color: #666666;
  }
`;
