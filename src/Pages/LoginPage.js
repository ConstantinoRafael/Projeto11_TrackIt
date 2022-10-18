import styled from "styled-components"

export default function LoginPage() {
    return(
        <Login>
            <Logo>TrackIt</Logo>

            <Input placeholder="email"></Input>
            <Input placeholder="senha"></Input>
            <Button>Entrar</Button>

            <p>Não tem uma conta? Cadastre-se!</p>
        </Login>
    )
}

const Login = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;
    
    
`

const Logo = styled.h1`
    font-family: 'Playball', cursive;
    font-size: 69px;
    font-weight: 400;
    color: #126BA5;
    margin-top: 160px;
    margin-bottom: 26px;
`

const Input = styled.input`
    width: 303px;
    height: 45px;
    border-radius: 5px;
    border-color: #D4D4D4;
    border-style: solid;
    padding-left: 10px;
    font-family: 'Lexend Deca', sans-serif;
    margin-top: 6px;

    ::placeholder{
        color: #DBDBDB;
        font-size: 20px;
        font-weight: 400;

    }
`

const Button = styled.button`
    width: 320px;
    height: 45px;
    border-radius: 5px;
    border: none;
    background-color: #52B6FF;
    color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 21px;
    margin-top: 6px;
`
