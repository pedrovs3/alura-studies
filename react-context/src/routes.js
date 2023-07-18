import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserProvider from "common/context/Usuario";
import CarrinhoProvider from "common/context/Carrinho";
import { PagamentoProvider } from "common/context/Pagamento";

// Criando rotas para a aplicação
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Tag responsavel por "passar" o contexto as paginas, 
          bem como seus valores
          (a tag foi configurada no arquivo common/context/nomeContexto) 
        */}
        <UserProvider>
          <Route exact path="/">
            <Login />
          </Route>
          <PagamentoProvider>
            <CarrinhoProvider>
              <Route path="/feira">
                <Feira />
              </Route>
              <Route path="/carrinho">
                <Carrinho />
              </Route>
            </CarrinhoProvider>
          </PagamentoProvider>
        </UserProvider>
      </Switch>
    </BrowserRouter>
  );
}
