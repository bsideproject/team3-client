const todoService = {
  getTodoList() {
    return Promise.resolve([])
  },
  addTodo(item: any) {
    return Promise.resolve(item)
  },
  deleteTodo(item: any) {
    return Promise.resolve(item)
  },
  updateTodo(item: any) {
    return Promise.resolve(item)
  },
  deleteAllTodo() {
    return Promise.resolve()
  },
}

export default todoService
