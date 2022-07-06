import TodoViewModel from '@/view-models/TodoListViewModel'
import TodoListView from '@/views/TodoList/TodoListView'
import { observer } from 'mobx-react'
import React, { useState } from 'react'

type Props = {
  todoViewModel: TodoViewModel
}

const TodoListController = observer(({ todoViewModel }: Props) => {
  return <TodoListView todoList={todoViewModel.todoList} />
})

export default TodoListController
