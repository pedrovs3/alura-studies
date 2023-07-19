import styles from './Item.module.scss'; 
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/Tags';
import { useNavigate } from 'react-router-dom';

type Props = typeof cardapio[0];

export default function Item(props: Props) {
  const navigate = useNavigate();
  const { title, description, photo, id } = props;
  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <TagsPrato {...props}/>
      </div>
    </div>
  );
}
