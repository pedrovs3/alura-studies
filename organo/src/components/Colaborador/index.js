import './Colaborador.css'
import { TrashSimple } from '@phosphor-icons/react'
import {Heart} from '@phosphor-icons/react'

const Colaborador = ({ colaborador,nome, imagem, cargo, corDeFundo, onDelete, aoFavoritar }) => {

	const favoritar = (e) => {
		aoFavoritar(colaborador.id)
	}

	const propsFavorito = {
		size: 24,
		onClick: favoritar
	}

    return (
        <div className='colaborador'>
            <TrashSimple
            	className='deletar' 
            	size={24} 
            	onClick={() => onDelete(colaborador.id)}
            />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
								<div className='favoritar'>
									{colaborador.favorito 
										? (<Heart {...propsFavorito} weight='fill' color='red'/>) 
										: (<Heart {...propsFavorito} />)
									}
								</div>
						</div>
        </div>
    )
}

export default Colaborador
