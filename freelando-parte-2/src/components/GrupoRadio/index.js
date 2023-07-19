import RadioButton from "../RadioButton";

export default function GrupoRadio({opcoes, valor, onChange}) {
  return (
    <div>
      {opcoes.map((option) => (
        <RadioButton 
          key={option.valor}
          checked={option.valor === valor}
          label={option.label}
          onClick={() => onChange(option.valor)}
          valor={option.valor}
        />
      ))}
    </div>
  )
}