import styled from "styled-components";
import {useState} from 'react'
import { Button } from "../Button";
import style from './Form.module.scss' 
import { v4 as uuidv4} from 'uuid'


type FormProps = {
    setTasks: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default function Form({setTasks}: FormProps) {
    // const { register, handleSubmit ,formState: {errors}} = useForm();
    const [title, setTitle] = useState("")
    const [time, setTime] = useState("00:00")

    // const onSubmit = (data) => console.log(data)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const task = {
            title, 
            time
        }

        setTasks((olderTasks) => 
            [  
                ...olderTasks, 
                {
                    ...task, 
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        )
        setTime("00:00")
        setTitle("")
    }

    return (
        <form className={style.novaTarefa} onSubmit={handleSubmit}>
            <div className={style.inputContainer}>
                <label htmlFor="task">Adicione um novo estudo</label>
                <input 
                type="text" 
                name="task"
                id="task"
                placeholder="O que você quer estudar?"
                value={title}
                onChange={(event) => {setTitle(event.target.value)}}
                required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">Tempo</label>
                <input 
                type="time"
                value={time}
                onChange={(event) => {setTime(event.target.value)}}
                step={1}
                name="time"
                id="time"
                min={"00:00:00"}
                max={"01:30:00"}
                required
                />
            </div>
            <Button>
                Adicionar
            </Button>
        </form>
    )
}

{/* <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("title", {required: true})} />
    {errors.title && <span>O titulo é obrigatório!</span>}
    <input {...register("time", {required: true})} />
    {errors.time && <span>Insira o tempo da tarefa.</span>}
</form> */}