import TodoListController from '@/controllers/TodoListController'
import { StoreContext } from '@/models/store'
import TodoListViewModel from '@/view-models/TodoListViewModel'
import React, { Component, ContextType, useContext, useRef } from 'react'

class TodoList extends Component {
  static contextType = StoreContext

  private todoListViewModel: TodoListViewModel

  constructor(props: any, context: ContextType<typeof StoreContext>) {
    super(props)

    const { todosModel } = context

    this.todoListViewModel = new TodoListViewModel(todosModel)
  }

  render() {
    return <TodoListController todoViewModel={this.todoListViewModel} />
  }
}

export default TodoList
