import { Nav } from "./styles";
import { ReactComponent as Logo } from "assets/logo.svg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useCarrinhoContext } from "common/context/Carrinho";

export default function NavBar() {
  const history = useHistory();
  const { quantidadeProdutos } = useCarrinhoContext();
  return (
    <Nav>
      <Logo />
      <IconButton
        onClick={() => history.push(`/carrinho`)}
        disabled={quantidadeProdutos === 0}
      >
        <Badge color="primary" badgeContent={quantidadeProdutos}>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  );
}
