import {
  Button,
  Snackbar,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useContext, useEffect, useMemo, useState } from "react";
import {
  Container,
  Voltar,
  TotalContainer,
  PagamentoContainer,
} from "./styles";
import { useCarrinhoContext } from "common/context/Carrinho";
import Produto from "components/Produto";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { usePagamentoContext } from "common/context/Pagamento";
import { UserContext } from "common/context/Usuario";

function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const history = useHistory();
  const { saldo = 0 } = useContext(UserContext);
  const { carrinho, valorTotal, efetuarPagamento } = useCarrinhoContext();
  const { formaPagamento, tiposPagamento, mudarFormaPagamento } =
    usePagamentoContext();

  const total = useMemo(() => saldo - valorTotal, [saldo, valorTotal]);
  return (
    <Container>
      <Voltar onClick={history.goBack} />
      <h2>Carrinho</h2>
      {carrinho.map((itemCarrinho) => (
        <Produto {...itemCarrinho}></Produto>
      ))}
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
          value={formaPagamento.id}
          onChange={(e) => mudarFormaPagamento(e.target.value)}
        >
          {tiposPagamento.map((formaPagamento) => (
            <MenuItem value={formaPagamento.id} key={PagamentoContainer.id}>
              {formaPagamento.nome}
            </MenuItem>
          ))}
        </Select>
      </PagamentoContainer>
      <TotalContainer>
        <div>
          <h2>Total no Carrinho: </h2>
          <span>R$ {valorTotal.toFixed(2).replace(`.`, `,`)}</span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ {Number(saldo).toFixed(2).replace(`.`, `,`)}</span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ {total.toFixed(2).replace(`.`, `,`)}</span>
        </div>
      </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
          efetuarPagamento();
        }}
        color="primary"
        variant="contained"
        disabled={saldo <= valorTotal || carrinho.length <= 0}
      >
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <MuiAlert onClose={() => setOpenSnackbar(false)} severity="success">
          Compra feita com sucesso!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
}

export default Carrinho;
