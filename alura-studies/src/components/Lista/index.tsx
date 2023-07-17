import tasks from '../../mocks/tests'
import style from './List.module.scss'
import Item from './item'

type ListProps = {
    tasks: ITarefa[],
    selectTasks: (selectedTask: ITarefa) => void 
}

export default function List({tasks, selectTasks}: ListProps) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task) => (
                    <Item
                        selectTasks={selectTasks} 
                        key={task.id} 
                        {...task}
                    />
                ))}
            </ul>
        </aside>
    )
}