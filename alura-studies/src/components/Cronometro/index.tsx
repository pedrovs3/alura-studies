import { Button } from "../Button"
import {useState, useEffect} from 'react'
import Relogio from "./Relogio"
import style from './Cronometro.module.scss'
import timeToSeconds from "../../common/utils/time"

type CronometroProps = {
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: CronometroProps) {
  const [time, setTime] = useState<number>()

  const regressiva = (contador :number = 0) => {
    setTimeout(() => {
      if(contador > 0) {
        setTime(contador - 1)
        return regressiva(contador - 1)
      }
      finalizarTarefa()
    }, 1000)
  }

  useEffect(() => {
    if(selecionado?.time) setTime(timeToSeconds(selecionado.time))
  }, [selecionado])

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={time}/>
      </div>
      <Button onClick={() => regressiva(time)}>
        Iniciar!
      </Button>
    </div>
  )
}