import Service, { TodoService } from '@/types/service'
import { Todo } from '@/types/Todo'
import { makeAutoObservable } from 'mobx'

export default class TodoModel {
  private todos: Todo[] = []

  private service: TodoService

  constructor(service: Service) {
    this.service = service.TodoService

    makeAutoObservable<this, string>(this, {
      service: false,
    })
  }

  async load() {
    const todos = await this.service.getTodoList()
    this.todos = todos
  }

  async create(item: Todo) {
    const addedTodo = await this.service.addTodo(item)
    this.todos = [...this.todos, addedTodo]
  }

  async delete(item: Todo) {
    const deletedTodo = await this.service.deleteTodo(item)
    this.todos = this.todos.filter((item) => item.id !== deletedTodo.id)
  }

  async update(item: Todo) {
    const updatedTodo = await this.service.updateTodo(item)
    this.todos = this.todos.map((item) => {
      if (item.id === updatedTodo.id) {
        return updatedTodo
      }

      return item
    })
  }

  async deleteAll() {
    await this.service.deleteAllTodo()

    this.todos = []
  }

  get todoList() {
    return this.todos
  }
}
