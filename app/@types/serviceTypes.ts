import { Todo } from '@/types/todoTypes'

export interface TestServiceInterface {
  test(): string
}

export interface TodoServiceInterface {
  getTodoList(): Promise<Todo[]>
  addTodo(item: Todo): Promise<Todo>
  deleteTodo(item: Todo): Promise<Todo>
  updateTodo(item: Todo): Promise<Todo>
  deleteAllTodo(): Promise<void>
}

export default interface Service {
  testService: TestServiceInterface
  todoService: TodoServiceInterface
}
