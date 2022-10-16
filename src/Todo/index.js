import './index.css'
import { useStore } from '../store'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

function Task () {
  const { taskStore } = useStore()
  const [taskValue, setTaskValue] = useState('')

  function onChange (e, id) {
    // console.log(e, id)
    taskStore.singleCheck(e.target.checked, id)
  }

  function allChange (e) {
    // console.log(e.target.checked)
    taskStore.allCheck(e.target.checked)
  }

  function removeTask (id) {
    taskStore.removeTask(id)
  }

  function addTask (e) {
    // console.log(e)
    if (e.code === 'Enter') {
      taskStore.addTask({
        id: uuid(),
        name: taskValue,
        isDone: false
      })
      // 添加成功后清空input输入框
      setTaskValue('')
    }
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
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
          onKeyDown={addTask}
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
                <button className="destroy" onClick={() => removeTask(item.id)}></button>
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