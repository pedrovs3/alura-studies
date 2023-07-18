import { useForkRef } from "@material-ui/core";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./Usuario";
import { usePagamentoContext } from "./Pagamento";

// Constante de criação do contexto
export const CarrinhoContext = createContext();

// displayName serve para "renomear" o contexto dentro da extensão react context no navegador
CarrinhoContext.displayName = `Carrinho`;

// exportação do componente responsável por passar os valores do contexto a outros componentes e páginas
// todo componente react recebe children nas props
export default function CarrinhoProvider({ children }) {
  // Criação dos estados que estarão presentes no contexto
  const [carrinho, setCarrinho] = useState([]);
  const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
  const [valorTotal, setValorTotal] = useState(0.0);

  return (
    // Passando os valores para o provedor do contexto
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        quantidadeProdutos,
        setQuantidadeProdutos,
        valorTotal,
        setValorTotal,
      }}
    >
      {/* Adicionando o componente filho ao provedor de contexto */}
      {children}
    </CarrinhoContext.Provider>
  );
}

// Hook customizável para utilizar o contexto do carrinho
export const useCarrinhoContext = () => {
  // Utilizando contexto do carrinho para pegar os dois estados
  const {
    carrinho,
    setCarrinho,
    quantidadeProdutos,
    setQuantidadeProdutos,
    setValorTotal,
    valorTotal,
  } = useContext(CarrinhoContext);
  const { formaPagamento } = usePagamentoContext();
  const { setSaldo } = useContext(UserContext);

  const mudarQuantidade = (id, quantidade) => {
    return carrinho.map((item) => {
      if (item.id === id) item.quantidade += quantidade;
      return item;
    });
  };

  // Adicionando a função de adicionar produto ao contexto afim de torna-lo o manipulador do contexto de usuário
  const addItemToCart = (newProduct) => {
    const existInCart = carrinho.some(
      (itemCarrinho) => itemCarrinho.id === newProduct.id
    );

    if (!existInCart) {
      newProduct.quantidade = 1;
      return setCarrinho([...carrinho, newProduct]);
    }

    return setCarrinho(mudarQuantidade(newProduct.id, 1));
  };

  // Adicionando a função de deletar item do carrinho ao contexto
  const deleteItemFromCart = (id) => {
    const produto = carrinho.find((itemCarrinho) => itemCarrinho.id === id);
    const isLast = produto.quantidade === 1;
    if (isLast) {
      return setCarrinho((carrinhoAnterior) =>
        carrinhoAnterior.filter((itemCarrinho) => itemCarrinho.id !== id)
      );
    }
    return setCarrinho(mudarQuantidade(id, -1));
  };

  const efetuarPagamento = () => {
    setCarrinho([]);
    setSaldo((saldoAtual) => saldoAtual - valorTotal);
  };

  // Atualizar dados apenas quando uma das variaveis no array de dependencia mudar
  useEffect(() => {
    const { novoTotal, novaQuantidade } = carrinho.reduce(
      (contador, produto) => ({
        novaQuantidade: contador.novaQuantidade + produto.quantidade,
        novoTotal: contador.novoTotal + produto.valor * produto.quantidade,
      }),
      { novaQuantidade: 0, novoTotal: 0 }
    );

    setQuantidadeProdutos(novaQuantidade);
    setValorTotal(novoTotal * formaPagamento.juros);
  }, [carrinho, setQuantidadeProdutos, setValorTotal, formaPagamento]);

  return {
    carrinho,
    setCarrinho,
    addItemToCart,
    deleteItemFromCart,
    quantidadeProdutos,
    valorTotal,
    efetuarPagamento,
  };
};
