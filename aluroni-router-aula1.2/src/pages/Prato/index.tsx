import stylesTema from 'styles/Tema.module.scss';
import { useLocation, useParams } from 'react-router-dom';

export default function Prato() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h3 className={stylesTema.titulo}>{state.title}</h3>
    </div>
  );
}