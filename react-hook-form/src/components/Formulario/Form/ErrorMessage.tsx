import { useFormContext } from 'react-hook-form'
import styles from '../Formulario.module.scss'

interface ErrorMessageProps {
  field: string
}

export default function ErrorMessage({ field }: ErrorMessageProps) {
  const { formState: { errors } } = useFormContext();

  const fieldError = errors[field]

  if (!fieldError) {
    return null
  }

  return (
    <>
      {/* Exibição de um possivel erro: */}
      {errors.lastName && <span className={styles.input_error}>{fieldError.message}</span>}
    </>
  )
}
