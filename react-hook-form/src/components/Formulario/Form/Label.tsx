import styles from '../Formulario.module.scss'

interface LabelProps {
  children: React.ReactNode
  title: string
}

export default function Label({ children, title }: LabelProps) {

  return (
    <label className={styles.form__label}>
      {title}
      {children}
    </label>
  )
}
