import mainService from '@/services/service'

const service: typeof mainService = {
  testService: {
    test() {
      return 'testapi'
    },
  },
  todoService: {
    getTodoList() {
      return Promise.resolve([])
    },
    addTodo(item) {
      return Promise.resolve(item)
    },
    deleteTodo(item) {
      return Promise.resolve(item)
    },
    updateTodo(item) {
      return Promise.resolve(item)
    },
    deleteAllTodo() {
      return Promise.resolve()
    },
  },
}

export default service
