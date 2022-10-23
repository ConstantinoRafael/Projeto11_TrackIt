import styled from "styled-components";

export default function HeaderHabits({createNewHabit, setCreateNewHabit}) {

    function showBoxNewHabit() {
      setCreateNewHabit(true);
    }


  return (
    <MhAndButton>
      <h2>Meus hábitos</h2>
      <button onClick={showBoxNewHabit}>+</button>
    </MhAndButton>
  );
}

const MhAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 28px 18px;

  h2 {
    font-size: 23px;
    color: #126ba5;
  }

  button {
    width: 40px;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: #52b6ff;
    color: #ffffff;
    font-size: 27px;
    font-weight: 400;
  }
`;
