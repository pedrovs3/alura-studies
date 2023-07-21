'use client'
import { useForm, useFieldArray, FormProvider } from "react-hook-form"
import styles from "./Formulario.module.scss"
import { useUsersContext } from "@/common/context/Users";
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateUserFormData, createUserFormSchema } from "@/common/schemas/createUser";
import classNames from "classnames";

import { Form } from './Form'

export default function Formulario() {
  // Declaração do useForm para a utilização do hook "react hook form" com a tipagem e resolvers com base no ZOD
  const createUserForm = useForm<CreateUserFormData>({ resolver: zodResolver(createUserFormSchema) });

  const { control, formState: { errors }, handleSubmit, register } = createUserForm;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'techs'
  })

  const { addUser } = useUsersContext();

  const createUser = (data: CreateUserFormData) => {
    console.log(data)
    console.log(data)
    addUser(data);
  }

  const addNewTech = () => {
    append({
      title: '',
      knowledge: 0
    })
  }


  return (
    <FormProvider {...createUserForm}>
      <form className={styles.form} onSubmit={handleSubmit(createUser)}>
        <Form.Label title="First name:">
          <Form.Input name="firstName" />
        </Form.Label>
        <Form.Label title="Last name:">
          <Form.Input name="lastName" />
        </Form.Label>
        <Form.Label title="Email:">
          <Form.Input name="email" />
        </Form.Label>
        <Form.Label title="Password">
          <Form.Input name="password" type="password" />
        </Form.Label>
        <label className={styles.form__label}>
          <div className={styles.form__label__header}>
            Tecnologias:
            <button type="button" className={styles.button} onClick={addNewTech}>+</button>
          </div>
          {fields.map((field, index) => (
            <div className={styles.field_inputs} id={field.id}>
              <div className={styles.field_inputs__col}>
                <label>Nome:</label>
                <input type="text" className={styles.input} {...register(`techs.${index}.title`)} />
                {errors.techs?.[index]?.title && <span className={styles.input_error}>{errors.techs?.[index]?.title?.message}</span>}
              </div>

              <div className={classNames({
                [styles.field_inputs__col]: true,
                [styles.field_inputs__col_knowledge]: true,
              })}>
                <label>Conhecimento :</label>
                <input type="number" className={styles.input} {...register(`techs.${index}.knowledge`)} />
                {errors.techs?.[index]?.knowledge && <span className={styles.input_error}>{errors.techs?.[index]?.knowledge?.message}</span>}
              </div>
            </div>
          ))}

          {errors.techs && <span className={styles.input_error}>{errors.techs.message}</span>}
        </label>
        <input type="submit" />
      </form>
    </FormProvider>
  )
}
