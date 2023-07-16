import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {
	const [times, setTimes ] = useState([
    {
      nome: 'Programação',
      cor: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      cor: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      cor: '#F0F8E2'
    },
    {
      nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      cor: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  const deletarColaborador = () => {
    console.log(`deletando Colab`)
  };

	const onChangeTeamColor = (cor, nome) => {
		setTimes(times => times.map((time) => {
			if(time.nome === nome) {
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
        key={time.nome} 
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
