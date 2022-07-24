import { todosFixture } from '@/models/domain/__fixtures__/todosFixture'
import { TodoService } from '@/types/serviceTypes'
import { Todo } from '@/types/todoTypes'

const todoService: TodoService = {
  getTodoList() {
    const todos: Todo[] = todosFixture

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

export default todoService
