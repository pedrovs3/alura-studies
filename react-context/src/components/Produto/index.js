import { Container } from "./styles";
import { memo } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useCarrinhoContext } from "common/context/Carrinho";

function Produto({ nome, foto, id, valor, quantidade }) {
  // A função "addItemToCart" foi extraida do componente para tirar essa responsabilidade do componente
  const { carrinho, addItemToCart, deleteItemFromCart } = useCarrinhoContext();
  const produtoNoCarrinho = carrinho.find(
    (itemNoCarrinho) => itemNoCarrinho.id === id
  );

  return (
    <Container>
      <div>
        <img src={`/assets/${foto}.png`} alt={`foto de ${nome}`} />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton
          disabled={!produtoNoCarrinho}
          color="secondary"
          onClick={() => deleteItemFromCart(id)}
        >
          <RemoveIcon />
        </IconButton>
        {produtoNoCarrinho?.quantidade || 0}
        <IconButton
          color="primary"
          onClick={() => addItemToCart({ id, nome, foto, valor })}
        >
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  );
}

export default memo(Produto);
