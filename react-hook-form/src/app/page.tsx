import Formulario from '@/components/Formulario'
import styles from './page.module.css'
import ListaUsers from '@/components/ListaUsers'

export default function Home() {
  return (
    <main className={styles.main}>
      <Formulario />
      <ListaUsers />
    </main>
  )
}
