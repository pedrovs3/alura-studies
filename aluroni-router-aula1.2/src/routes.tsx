import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import DefaultPage from 'components/DefaultPage';
import Sobre from 'pages/Sobre';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu/>
        <Routes>
          {/* Nested routes sao rotas "aninhadas" */}
          <Route path='/' element={<DefaultPage/>}>
            <Route index element={<Inicio/>} />
            <Route path='cardapio' element={<Cardapio />}/>
            <Route path='sobre' element={<Sobre/>}></Route>
          </Route>
          <Route path='*' element={<NotFound/>}></Route>
          <Route path='prato/:id' element={<Prato/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}