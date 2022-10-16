
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

  // 计算属性：只有当list所有子项都是选中的时候，才是全选状态
  get isAll () {
    return this.list.every(item => item.isDone)
  }

  // 删除操作
  removeTask = (id) => {
    this.list = this.list.filter(item => item.id !== id)
  }

  // 新增操作
  addTask = (task) => {
    this.list.push(task)
  }

  // 计算属性：list总数量
  get totalCount () {
    return this.list.length
  }

  // 计算属性：完成数量
  get doneCount () {
    return this.list.filter(item => item.isDone).length
  }
}
export default TaskStore
