import { Navigate, useParams } from 'react-router-dom';
import styles from './Admin.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import classNames from 'classnames';

export default function Admin() {
  const {user} = useParams();
  if(user !== 'pedro') {
    return (<Navigate to={'/'}/>);
  } 
  
  return (
    <section>
      <div className={classNames({
        [stylesTema.container]: true,
        [styles.container]: true
      })}>
        <h1>Página admin</h1>
        <form className={styles.form}>
          <label htmlFor="username">Username</label>
          <input type="text" id='username' name='username' />
          <label htmlFor="password">Username</label>
          <input type="password" id='password' name='password' />
        </form>
        <button>Entrar</button>
      </div>
    </section>
  );
}
