
import { makeAutoObservable } from 'mobx'
class TaskStore {
  list = [
    {
      id: 1,
      name: '学习react',
      isDone: true
    },
    {
      id: 2,
      name: '搞定mobx',
      isDone: false
    }
  ]
  constructor() {
    makeAutoObservable(this)
  }

  checkItem = (isDone, id) => {
    const item = this.list.find(item => item.id === id)
    item.isDone = isDone
  }
}
export default TaskStore
