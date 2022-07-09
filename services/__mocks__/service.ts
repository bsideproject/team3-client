import { todosFixture } from '@/models/domain/__fixtures__/todosFixture'
import Service from '@/types/service'
import { Todo } from '@/types/Todo'

const service: Service = {
  TestService: {
    test() {
      return 'testapi'
    },
  },
  TodoService: {
    getTodoList() {
      const todos: Todo[] = todosFixture

      return Promise.resolve(todos)
    },
    addTodo(item) {
      return Promise.resolve(item)
    },
    deleteTodo(item: Todo) {
      return Promise.resolve(item)
    },
    updateTodo(item: Todo) {
      return Promise.resolve(item)
    },
    deleteAllTodo() {
      return Promise.resolve()
    },
  },
}

export default service
