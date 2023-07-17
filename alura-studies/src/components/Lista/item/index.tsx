import style from './Item.module.scss'

interface ItemProps extends ITarefa {
  selectTasks: (selectedTask: ITarefa) => void 
}

export default function Item({title, time, selected, completed, id, selectTasks}: ItemProps) {
  return (
    <li className={`${style.item} ${selected ? style.itemSelecionado : ''} ${completed ? style.itemCompletado : ''}`} 
    onClick={() => {!completed &&
      selectTasks({title,
        time,
        selected,
        completed,
        id
      })
    }}>
      <h3>{title}</h3>
      <span>{time}</span>
      {completed &&  <span className={style.concluido} aria-label='tarefa completada'></span>}
    </li>
  )
}