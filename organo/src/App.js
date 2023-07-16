import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import {v4 as uuidv4 } from 'uuid'

function App() {
	const [times, setTimes ] = useState([
    {
      id: uuidv4(),
			nome: 'Programação',
      cor: '#D9F7E9'
    },
    {
      id: uuidv4(),
			nome: 'Front-End',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
			nome: 'Data Science',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
			nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
			nome: 'UX e Design',
      cor: '#FAE9F5'
    },
    {
      id: uuidv4(),
			nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      id: uuidv4(),
			nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

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

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        key={time.id} 
				id={time.id}
        nome={time.nome} 
				cor={time.cor}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        onDelete={deletarColaborador}
				changeColor={onChangeTeamColor}
      />)}   

    </div>
  );
}

export default App;
