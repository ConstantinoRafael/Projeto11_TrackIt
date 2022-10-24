import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "../context/User";
import { BsTrash } from "react-icons/bs";

const weakdays = ["D", "S", "T", "Q", "Q", "S", "S"];

function Days({ w, i, days }) {
  if (days.includes(i)) {
    return <SelectedDay data-identifier="week-day-btn">{w}</SelectedDay>;
  } else {
    return <NotSelectedDay data-identifier="week-day-btn">{w}</NotSelectedDay>;
  }
}

function OneHabit({ id, name, days, user }) {
  function deleteHabit() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const promise = axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
      config
    );

    promise.then(console.log("deletadinho"));

    promise.catch(console.log("deu ruim e não deletou"));
  }

  return (
    <ContainerHabit>
      <FraseELixeira>
        <h3 data-identifier="habit-name">{name}</h3>
        <div>
          <BsTrash data-identifier="delete-habit-btn" onClick={deleteHabit} />
        </div>
      </FraseELixeira>

      <ButtonsDays>
        {weakdays.map((w, i) => (
          <Days w={w} key={i} i={i} days={days} />
        ))}
      </ButtonsDays>
    </ContainerHabit>
  );
}

export default function ListHabits() {
  const { user, setUser } = useUser(undefined);
  const [selects, setSelects] = useState([]);
  const [habitsList, setHabitList] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );

    promise.then((res) => {
      setHabitList(res.data);
    });

    promise.catch((err) => console.log(err.response.data));
  }, [habitsList, user.token]);

  return (
    <>
      {habitsList.map((h) => (
        <OneHabit
          key={h.id}
          id={h.id}
          name={h.name}
          days={h.days}
          selects={selects}
          setSelects={setSelects}
          user={user}
        />
      ))}

      {habitsList.length === 0 ? (
        <p data-identifier="no-habit-message">
          Você Não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      ) : (
        ""
      )}
    </>
  );
}

const ContainerHabit = styled.div`
  width: 340px;
  height: 91px;
  background-color: #ffffff;
  margin: 0px auto 10px;
  border-radius: 5px;

  h3 {
    font-size: 20px;
    color: #666666;
    margin: 15px 0px 8px 20px;
  }
`;

const FraseELixeira = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    font-size: 20px;
    color: #666666;
    margin: 10px;
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
