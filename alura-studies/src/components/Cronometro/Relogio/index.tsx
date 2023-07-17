import style from './Relogio.module.scss'

type RelogioProps = {
  tempo: number | undefined
}

export default function Relogio({tempo = 0}: RelogioProps) {
  const minutos = Math.floor(tempo / 60)
  const segundos = tempo % 60

  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0')
  const [segundosDezena, segundosUnidade] = String(segundos).padStart(2, '0')
  return (
    <>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span>:</span>
      <span className={style.relogioNumero}>{segundosDezena}</span>
      <span className={style.relogioNumero}>{segundosUnidade}</span>
    </>
  )
}