import React, {useState} from 'react';
import Form from '../components/Form';
import List from '../components/Lista';
import style from './App.module.scss'
import Cronometro from '../components/Cronometro';

function App() {
  const [tasks, setTasks] = useState<ITarefa[] | []>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()

  function selectTask(taskSelected: ITarefa) {
    setSelecionado(taskSelected)
    setTasks(tarefasAntigas => tarefasAntigas.map(task => (
      {...task, 
        selected: task.id === taskSelected.id ? true : false
      }
    )))
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined)
      setTasks(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return { 
            ...tarefa,
            selected: false,
            completed: true
          }
        } 
        return tarefa
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks}
        selectTasks={selectTask}
      />
      <Cronometro 
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}  
      />
    </div>
  );
}

export default App;
