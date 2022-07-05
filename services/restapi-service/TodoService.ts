import { todoListFixture } from '@/models/domain/__fixtures__/todoFixture'
import { TodoService } from '@/types/service'
import { Todo } from '@/types/Todo'

const TodoService: TodoService = {
  getTodoList() {
    const todos: Todo[] = todoListFixture

    return Promise.resolve(todos)
  },
  addTodo(item: Todo) {
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
}

export default TodoService
