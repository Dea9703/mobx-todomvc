import './index.css'
import { useStore } from '../store'
import { observer } from 'mobx-react-lite'

function Task () {
  const { taskStore } = useStore()

  function onChange (e, id) {
    // console.log(e, id)
    taskStore.singleCheck(e.target.checked, id)
  }

  function allChange (e) {
    // console.log(e.target.checked)
    taskStore.allCheck(e.target.checked)
  }

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
          onChange={allChange}
          checked={taskStore.isAll}
          readOnly
        />
        {/* 全选 */}
        <label htmlFor="toggle-all" />
        <ul className="todo-list">
          {/* 列表区域 */}
          {taskStore.list.map(item =>
            <li key={item.id} className={item.isDone ? 'todo completed' : 'todo'}>
              <div className="view">
                {/* 单选框 非受控和受控 选择受控的方式 */}
                {/* 思想：mobx store去维护状态 input只需把e.target.value交给store来修改 */}
                <input
                  id={item.id}
                  className="toggle"
                  type="checkbox"
                  onClick={(e) => onChange(e, item.id)}
                  checked={item.isDone}
                  readOnly
                />
                <label htmlFor={item.id}>{item.name}</label>
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

export default observer(Task)