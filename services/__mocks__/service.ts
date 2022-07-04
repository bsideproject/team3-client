import { todoListFixture } from '@/models/domain/__fixtures__/todoFixture'
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
      const todos: Todo[] = todoListFixture

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
  },
}

export default service
