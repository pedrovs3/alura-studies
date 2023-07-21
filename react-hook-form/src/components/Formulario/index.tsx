'use client'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import styles from "./Formulario.module.scss"
import { useUsersContext } from "@/common/context/Users";
import { IUsers } from "@/app/layout";

export default function Formulario() {
  const { register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { setUsers } = useUsersContext();

  const onSubmit = (data: any) => {
    setUsers((estadoAnterior: IUsers[]) => [...estadoAnterior, data])
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.form__label}>
        First name:
        <input className={styles.input} {...register("firstName")} />
      </label>
      <label className={styles.form__label}>
        Last name:
        <input className={styles.input} {...register("lastName")} />
      </label>
      <label className={styles.form__label}>
        Email:
        <input className={styles.input} {...register("email", { required: true })} />
      </label>
      <input type="submit" />
    </form>
  )
}