import hexToRgba from 'hex-to-rgba'
import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({ colaboradores, nome, cor, onDelete, changeColor, id }) => {
    const css = { backgroundColor: hexToRgba(cor, 0.6) }

    return (
        (colaboradores.length > 0) ? <section className='time' style={css}>
						<input type='color' className='input-cor' value={cor} onChange={e => changeColor(e.target.value, id)}></input>
            <h3 style={{ borderColor: cor }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( (colaborador, index) => {
                    return ( <Colaborador 
                        corDeFundo={cor} 
                        key={colaborador.id} 
												colaborador={colaborador}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem}
                        onDelete={onDelete}
                        />)
                } )}
            </div>
        </section> 
        : ''
    )
}

export default Time
