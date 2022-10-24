import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useUser } from "../context/User";

const weakdays = ["D", "S", "T", "Q", "Q", "S", "S"];

function Days({ w, i, selects, setSelects }) {
  if (selects.includes(i)) {
    return <SelectedDay data-identifier="week-day-btn" onClick={selectDay}>{w}</SelectedDay>;
  } else {
    return <NotSelectedDay data-identifier="week-day-btn" onClick={selectDay}>{w}</NotSelectedDay>;
  }

  function selectDay() {
    if (!selects.includes(i)) {
      setSelects([...selects, i]);
    } else {
      setSelects(selects.filter((s) => s !== i));
    }
  }
}

export default function NewHabits({
  createNewHabit,
  setCreateNewHabit,
  habitsList,
  setHabitList,
}) {
  const { user, setUser } = useUser(undefined);
  const [selects, setSelects] = useState([]);
  const [habitName, setHabitName] = useState(undefined);

  function hideBoxNewHabit() {
    setCreateNewHabit(false);
  }

  function sendData(e) {
    e.preventDefault();

    const body = {
      name: habitName,
      days: selects,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      body,
      config
    );

    promise.then((res) => {
      setCreateNewHabit(false);
      setHabitList(res.data);
    });

    promise.catch((err) => console.log("deu ruiiiim"));
  }

  return (
    <ContainerNewHabit>
      <form onSubmit={sendData}>
        <input
          data-identifier="input-habit-name"
          placeholder="nome do hábito"
          type="text"
          onChange={(e) => setHabitName(e.target.value)}
        />
        <ButtonsDays>
          {weakdays.map((w, i) => (
            <Days
              w={w}
              key={i}
              i={i}
              selects={selects}
              setSelects={setSelects}
            />
          ))}
        </ButtonsDays>
        <ButtonsCancelarSalvar>
          <Cancelar data-identifier="cancel-habit-create-btn" onClick={hideBoxNewHabit}>Cancelar</Cancelar>
          <Salvar data-identifier="save-habit-create-btn" type="submit">Salvar</Salvar>
        </ButtonsCancelarSalvar>
      </form>
    </ContainerNewHabit>
  );
}

const ContainerNewHabit = styled.div`
  width: 340px;
  height: 180px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 0 auto 10px auto;

  input {
    width: 298px;
    height: 45px;
    border-style: solid;
    border-color: #d4d4d4;
    border-radius: 5px;
    margin: 18px 18px 2px 18px;

    ::placeholder {
      color: #d4d4d4;
      font-size: 20px;
      padding: 7px;
    }
  }
`;

const ButtonsDays = styled.div`
  display: flex;
  margin-left: 14px;
`;

const NotSelectedDay = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  border-style: solid;
  border-radius: 5px;
  border-color: #d4d4d4;
  color: #d4d4d4;
  background-color: #ffffff;
  margin: 4px;
`;

const SelectedDay = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  border-style: solid;
  border-radius: 5px;
  border-color: #d4d4d4;
  color: #ffffff;
  background-color: #d4d4d4;
  margin: 4px;
`;

const ButtonsCancelarSalvar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 16px 15px 0px;
`;

const Cancelar = styled.button`
  width: 84px;
  height: 35px;
  border: none;
  background-color: #ffffff;
  font-size: 16px;
  color: #52b6ff;
  margin-right: 10px;
`;

const Salvar = styled.button`
  width: 84px;
  height: 35px;
  border: none;
  background-color: #52b6ff;
  border-radius: 5px;
  font-size: 16px;
  color: #ffffff;
`;
