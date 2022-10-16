import './index.css'
import { useStore } from '../store'

function Task () {
  const { taskStore } = useStore()

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="What needs to be done?"
        />
      </header>
      <section className="main">
        {/* 新增输入框 */}
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
        />
        {/* 全选 */}
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {/* 列表区域 */}
          {taskStore.list.map(item =>
            <li key={item.id} className={item.isDone ? 'todo completed' : 'todo'}>
              <div className="view">
                <input className="toggle" type="checkbox" defaultChecked={item.isDone} />
                <label >{item.name}</label>
                <button className="destroy"></button>
              </div>
            </li>
          )}
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count">
          任务总数: {10} 已完成: {1}
        </span>
      </footer>
    </section>
  )
}

export default Task