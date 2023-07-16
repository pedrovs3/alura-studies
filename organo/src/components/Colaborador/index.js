import './Colaborador.css'
import { TrashSimple } from '@phosphor-icons/react'

const Colaborador = ({ nome, imagem, cargo, corDeFundo, onDelete }) => {
    return (
        <div className='colaborador'>
            <TrashSimple
            	className='deletar' 
            	size={24} 
            	onClick={onDelete}
            />
            {/* <div className='deletar' onClick={onDelete}>deletar</div>     */}
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador
