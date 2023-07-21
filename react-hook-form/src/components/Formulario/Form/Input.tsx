import { useFormContext } from "react-hook-form"
import styles from '../Formulario.module.scss'
import { CreateUserFormData } from "@/common/schemas/createUser";
import { InputHTMLAttributes } from "react";
import ErrorMessage from "./ErrorMessage";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export default function Input(props: InputProps) {
  const { register } = useFormContext<CreateUserFormData>();

  return (
    <>
      {/* register "cadastra" o input no react-hook-form, alem de poder colocar validações básicas no input */}
      <input className={styles.input} {...register(props.name)} {...props} />
      <ErrorMessage field={props.name} />
    </>
  )
} 
