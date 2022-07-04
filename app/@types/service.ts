import { Todo } from '@/types/Todo'

export interface TestService {
  test(): string
}

export interface TodoService {
  getTodoList(): Promise<Todo[]>
  addTodo(item: Todo): Promise<Todo>
  deleteTodo(item: Todo): Promise<Todo>
  updateTodo(item: Todo): Promise<Todo>
}

export default interface Service {
  TestService: TestService
  TodoService: TodoService
}
