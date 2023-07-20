import { createBrowserRouter } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom/dist";
import PaginaInicial from "../pages/PaginaInicial"
import SelecaoCliente from "../pages/cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../pages/cadastro/LayoutBaseCadastro";
import LayoutBase from "../pages/LayoutBase";
import Interesses from "../pages/interesses";
import DadosPessoais from "../pages/dadosPessoais";
import Concluido from "../pages/cadastro/concluido";
import CadastroUsuarioProvider from "../common/context/CadastroUsuario";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <CadastroUsuarioProvider>
                <LayoutBase />
            </CadastroUsuarioProvider>
        ),
        children: [
            {
                path: 'cadastro',
                element: <LayoutBaseCadastro />,
                children: [
                    {
                        path: '',
                        element: <SelecaoCliente />,
                    },
                    {
                        path: 'interesses',
                        element: <Interesses />
                    },
                    {
                        path: 'dados-pessoais',
                        element: <DadosPessoais />
                    },
                    {
                        path: 'concluido',
                        element: <Concluido />
                    }
                ]
            }
        ],
    },
]);

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PaginaInicial />}></Route>
            </Routes>
        </Router>
    )
}   