import TodoListController from '@/controllers/TodoListController'
import { useStore } from '@/hooks/storeHooks'
import TodoListViewModel from '@/view-models/TodoListViewModel'
import React, { memo } from 'react'

const TodoList = memo(() => {
  const { todosModel } = useStore()

  const todoListViewModel = new TodoListViewModel(todosModel)

  console.log('이것이 한번만 호출돼야함')

  return <TodoListController todoListViewModel={todoListViewModel} />
})

TodoList.displayName = 'TodoList'

export default TodoList
