import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/User";

export default function LoginPage() {
  const { user, setUser } = useUser(undefined);

  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      body
    );

    promise.then((resposta) => {
      navigate("/hoje");
      setUser(resposta.data);
      console.log(resposta.data);
    });

    promise.catch((err) => console.log("deu erroooo"));
  }

  return (
    <Login>
      <Logo>TrackIt</Logo>
      <Form onSubmit={sendData}>
        <Input
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder="senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button type="submit">Entrar</Button>
      </Form>
      <Link to={"/cadastro"}>
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Login>
  );
}

const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Lexend Deca", sans-serif;

  a {
    text-decoration-color: #52b6ff;
  }

  p {
    color: #52b6ff;
    margin-top: 20px;
  }
`;

const Logo = styled.h1`
  font-family: "Playball", cursive;
  font-size: 69px;
  font-weight: 400;
  color: #126ba5;
  margin-top: 160px;
  margin-bottom: 26px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 303px;
  height: 45px;
  border-radius: 5px;
  border-color: #d4d4d4;
  border-style: solid;
  padding-left: 10px;
  font-family: "Lexend Deca", sans-serif;
  margin-top: 6px;

  ::placeholder {
    color: #dbdbdb;
    font-size: 20px;
    font-weight: 400;
  }
`;

const Button = styled.button`
  width: 320px;
  height: 45px;
  border-radius: 5px;
  border: none;
  background-color: #52b6ff;
  color: #ffffff;
  font-family: "Lexend Deca", sans-serif;
  font-size: 21px;
  margin-top: 6px;
`;
