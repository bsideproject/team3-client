import { TodosModelHydration } from '@/types/hydrationTypes'
import Service, { TodoService } from '@/types/serviceTypes'
import { Todo } from '@/types/todoTypes'
import { makeAutoObservable, runInAction } from 'mobx'
import Store from '@/models/store'
import { todosFixture } from './__fixtures__/todosFixture'

export default class TodosModel {
  private todos: Todo[] = []

  private store: Store
  private service: TodoService

  constructor(store: Store, service: TodoService) {
    this.store = store
    this.service = service

    makeAutoObservable<this, string>(this, {
      store: false,
      service: false,
    })
  }

  hydrate(data: TodosModelHydration) {
    const { todos } = data

    this.todos = todos
  }

  async load() {
    const todos = await this.service.getTodoList()

    runInAction(() => {
      this.todos = todos
    })
  }

  async create(item: Todo) {
    const addedTodo = await this.service.addTodo(item)

    runInAction(() => {
      this.todos = [...this.todos, addedTodo]
    })
  }

  async delete(item: Todo) {
    const deletedTodo = await this.service.deleteTodo(item)

    runInAction(() => {
      this.todos = this.todos.filter((item) => item.id !== deletedTodo.id)
    })
  }

  async update(item: Todo) {
    const updatedTodo = await this.service.updateTodo(item)

    runInAction(() => {
      this.todos = this.todos.map((item) => {
        if (item.id === updatedTodo.id) {
          return updatedTodo
        }

        return item
      })
    })
  }

  async deleteAll() {
    await this.service.deleteAllTodo()

    runInAction(() => {
      this.todos = []
    })
  }

  get todoList() {
    return this.todos
  }
}
