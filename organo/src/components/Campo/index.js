import './Campo.css'

const Campo = ({ type = 'text', label, aoAlterado, placeholder, valor, obrigatorio }) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo">
            <label>
                {label}
            </label>
            <input type={type} value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default Campo
