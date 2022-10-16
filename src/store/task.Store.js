
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

  // 单选操作
  singleCheck = (isChecked, id) => {
    const item = this.list.find(item => item.id === id)
    item.isDone = isChecked
  }

  // 全选操作
  allCheck = (isChecked) => {
    this.list.forEach(item => item.isDone = isChecked)
  }

  get isAll () {
    return this.list.every(item => item.isDone)
  }
}
export default TaskStore
