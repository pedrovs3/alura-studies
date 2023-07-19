import styles from './DefaultPage.module.scss';
import {Outlet} from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';

export default function DefaultPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div className={stylesTema.container}>
        {/* Outlet é como se fosse o children (em um componente comum) utilizado nas rotas */}
        <Outlet />
      </div>
    </>
  );
}