import styles from './Cardapio.module.scss';
import Buscador from './Buscador';
import { useContext, useState } from 'react';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';
import stylesTema from 'styles/Tema.module.scss';
import { useTesteContext } from 'common/context/Teste';

export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');
  const {message, setMessage} = useTesteContext();

  return (
    <main>
      {/* <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <div>{message}</div> */}
      <section className={styles.cardapio}>
        <h3 className={stylesTema.titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
}
