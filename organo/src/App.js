import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import {v4 as uuidv4 } from 'uuid'
import { EyeClosed, EyeSlash } from '@phosphor-icons/react';
import './index.css'


function App() {
	const [times, setTimes ] = useState([])
	const [formVisibility, setFormVisibility] = useState(true)

  const [colaboradores, setColaboradores] = useState([{	
		id: uuidv4(),
		nome: 'Pedro',
		cargo: 'Dev',
		imagem: 'https://avatars.githubusercontent.com/u/86010036?v=4',
		time: 'Front-End'
	}])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
		console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  const deletarColaborador = (id) => {
		setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id))
  };

	const onChangeTeamColor = (cor, id) => {
		setTimes(times => times.map((time) => {
			if(time.id === id) {
				time.cor = cor
			}
			return time
		}))
	}

	const criaTime = (novoTime) => {
		times.forEach(timeExistente => {
			if(timeExistente.nome === novoTime.nome) throw new Error("Nome já cadastrado!")
		})
		setTimes([...times, novoTime])
	}

	const resolverFavorito = (id) => {	
		setColaboradores(colaboradores.map(colaborador => {
			if(colaborador.id === id) colaborador.favorito = !colaborador.favorito

			return colaborador
		}))
	}

	const toggleVisibility = () => {
		setFormVisibility(!formVisibility)
	}

	const propsButtonVisibility = {
		weight:'thin',
		onClick:toggleVisibility,
		className: 'button-visibility'
	}

	useEffect(() => {
		async function loadTeams() {
			await fetch('http://localhost:3000/times')
			.then(response => response.json())
			.then(data => setTimes(data))
		}
		async function loadColab() {
			await fetch('http://localhost:3000/colaboradores')
			.then(response => response.json())
			.then(data => setColaboradores(data))
		}

		loadColab()
		loadTeams()
	}, [])

  return (
    <div className="App">
      <Banner />
			{
				formVisibility ? (
					<Formulario 
						times={times.map(time => time.nome)} 
						aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
						aoCriarTime={time => criaTime(time)}
						visible={formVisibility}
					/>
				) :(<></>)
			}
			<div className='divider'>
				{formVisibility 
				? <EyeSlash size={32} {...propsButtonVisibility} /> 
				: <EyeClosed size={32} {...propsButtonVisibility} />
				}
			</div>
			
			
      {times.map(time => <Time 
        key={time.id} 
				id={time.id}
        nome={time.nome} 
				cor={time.cor}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        onDelete={deletarColaborador}
				changeColor={onChangeTeamColor}
				aoFavoritar={resolverFavorito}
      />)}   

    </div>
  );
}

export default App;
