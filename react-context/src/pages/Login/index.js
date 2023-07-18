import { Button } from "@material-ui/core";
import { Container, Titulo, InputContainer } from "./styles";
import { Input, InputLabel, InputAdornment } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { UserContext } from "common/context/Usuario";
import { useContext } from "react";

function Login() {
  // useHistory utiliza o histórico do navegador para poder transitar entre as rotas
  const history = useHistory();
  // Pegando os valores do context apartir do contexto de usuário
  const { nome, setNome, saldo, setSaldo } = useContext(UserContext);

  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          value={saldo}
          onChange={(event) => setSaldo(event.target.value)}
          type="number"
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        disabled={nome.length < 3}
        // Indo para outra tela apartir do history declarado na linha 10
        onClick={() => history.push("/feira")}
      >
        Avançar
      </Button>
    </Container>
  );
}

export default Login;
