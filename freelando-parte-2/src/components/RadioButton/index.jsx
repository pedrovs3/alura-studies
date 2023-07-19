import styled from '@emotion/styled'

const LabelEstilizado = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  margin-left: ${props => props.theme.espacamentos.xs};
  margin-bottom: ${props => props.theme.espacamentos.m};
  padding: ${props => props.theme.espacamentos.xs};
    &:hover {
        &:before {
            border-color: ${props => (props.theme.cores.focus)};
        }
    }
  &:before {
    content: '';
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.cores.neutras.a};
    border-color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
    background-color: ${props => (props.checked ? props.theme.cores.primarias.a : props.theme.cores.neutras.c)};
    border-color: ${props => (props.checked ? props.theme.cores.primarias.a : 'inherit')};
  } 
`

const InputEstilizado = styled.input`
  appearance: none;
  opacity: 0;
  &:focus + label {
    border-radius: 16px;
    border: 1px solid;
    border-color: ${props => props.theme.cores.focus};
  }
`

export default function RadioButton({ valor, label, checked, onClick }) {
  return (
    <>
      <InputEstilizado type='radio' valor={valor} checked={checked} onChange={onClick} id={`radio-customizado-${valor}`} />
      <LabelEstilizado htmlFor={`radio-customizado-${valor}`} checked={checked}>
        {label}
      </LabelEstilizado>
    </>
  )
}