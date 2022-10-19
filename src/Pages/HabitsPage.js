import styled from "styled-components";
import bolaAzul from "../assets/Images/BolaAzul.png";
import parteBranca from "../assets/Images/Vector.png";
import { GoTrashcan } from "react-icons/go";

export default function HabitsPage() {
  return (
    <HabitsFull>
      <NavBar>
        <Logo>TrackIt</Logo>
        <ProfileImg
          src="https://vandal-us.s3.amazonaws.com/spree/products/5e1b58e51d60270590082ed2/original/uploads_2F1578850455676-eudb7hqfbnn-a1f1b0a72e433a7450580e11b8c156c5_2FB1199B58-471D-4555-9082-6EB04AB3D029.jpg"
          alt="imagem de perfil"
        />
      </NavBar>

      <Main>
        <MhEButton>
          <h2>Meus hábitos</h2>
          <button>+</button>
        </MhEButton>
        {/* <ContainerNewHabit>
          <input placeholder="nome do hábito" />
          <ButtonsDays>
            <NotSelectedDay>D</NotSelectedDay>
            <SelectedDay>S</SelectedDay>
            <NotSelectedDay>T</NotSelectedDay>
            <SelectedDay>Q</SelectedDay>
            <NotSelectedDay>Q</NotSelectedDay>
            <SelectedDay>S</SelectedDay>
            <NotSelectedDay>S</NotSelectedDay>
          </ButtonsDays>
          <ButtonsCancelarSalvar>
            <Cancelar>Cancelar</Cancelar>
            <Salvar>Salvar</Salvar>
          </ButtonsCancelarSalvar>
        </ContainerNewHabit> */}

        {/* <p>
          Você Não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p> */}

        <ContainerHabits>
          <FraseELixeira>
            <h3>Ler 1 capítulo do livro</h3>
            <GoTrashcan />
          </FraseELixeira>

          <ButtonsDays>
            <NotSelectedDay>D</NotSelectedDay>
            <SelectedDay>S</SelectedDay>
            <NotSelectedDay>T</NotSelectedDay>
            <SelectedDay>Q</SelectedDay>
            <NotSelectedDay>Q</NotSelectedDay>
            <SelectedDay>S</SelectedDay>
            <NotSelectedDay>S</NotSelectedDay>
          </ButtonsDays>
        </ContainerHabits>

        <ContainerHabits>
          <FraseELixeira>
            <h3>Ler 1 capítulo do livro</h3>
            <GoTrashcan />
          </FraseELixeira>
          <ButtonsDays>
            <NotSelectedDay>D</NotSelectedDay>
            <SelectedDay>S</SelectedDay>
            <NotSelectedDay>T</NotSelectedDay>
            <SelectedDay>Q</SelectedDay>
            <NotSelectedDay>Q</NotSelectedDay>
            <SelectedDay>S</SelectedDay>
            <NotSelectedDay>S</NotSelectedDay>
          </ButtonsDays>
        </ContainerHabits>

        <ContainerHabits>
          <FraseELixeira>
            <h3>Ler 1 capítulo do livro</h3>
            <GoTrashcan />
          </FraseELixeira>
          <ButtonsDays>
            <NotSelectedDay>D</NotSelectedDay>
            <SelectedDay>S</SelectedDay>
            <NotSelectedDay>T</NotSelectedDay>
            <SelectedDay>Q</SelectedDay>
            <NotSelectedDay>Q</NotSelectedDay>
            <SelectedDay>S</SelectedDay>
            <NotSelectedDay>S</NotSelectedDay>
          </ButtonsDays>
        </ContainerHabits>
      </Main>

      <Footer>
        <p>Hábitos</p>
        <LogoHoje>
          <BolaAzul src={bolaAzul} alt="bola azul" />

          <ParteBranca src={parteBranca} alt="parte branca" />
          <p>Hoje</p>
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

const NavBar = styled.div`
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

const MhEButton = styled.div`
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

const ContainerNewHabit = styled.div`
  width: 340px;
  height: 180px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 0 auto;

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

const ContainerHabits = styled.div`
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
