import stylesTema from 'styles/Tema.module.scss';
import styles from './Prato.module.scss';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/Tags';
import NotFound from 'pages/NotFound';
import DefaultPage from 'components/DefaultPage';

export default function Prato() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const prato = cardapio.find((item) => item.id === Number(id)); 

  if(!prato) {
    return <NotFound/>;
  }
  

  return (
    <Routes>
      <Route path='*' element={<DefaultPage></DefaultPage>}>
        <Route index element={
          <>
            <button className={styles.voltar} onClick={() => navigate(-1)}>
              {' < Voltar'}  
            </button>
            <section className={styles.container}>
              <h1 className={stylesTema.titulo}>{prato.title}</h1>
              <div className={styles.imagem}>
                <img src={prato.photo} alt={prato.title} />
              </div>
              <div className={styles.conteudo}>
                <p className={styles.conteudo__descricao}>{prato.description}</p>
                <TagsPrato {...prato}/>
              </div>
            </section>
          </>
        }></Route>
      </Route>
    </Routes>
  );
}
