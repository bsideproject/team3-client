import TodoViewModel from '@/view-models/TodoListViewModel'
import TodoListView from '@/views/TodoList/TodoListView'
import { observer } from 'mobx-react-lite'
import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'

type Props = {
  todoListViewModel: TodoViewModel
}

const TodoListController = observer(({ todoListViewModel }: Props) => {
  const [title, setTitle] = useState('')

  const handleTodoAdd = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const inputCollection = e.currentTarget.elements
      const titleInput = inputCollection.namedItem('title') as HTMLInputElement
      const titleValue = titleInput.value

      todoListViewModel.addTodo(titleValue)
    },
    [todoListViewModel]
  )

  const handleTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setTitle(value)
  }, [])

  return (
    <TodoListView
      todoList={todoListViewModel.todoList}
      onTodoAdd={handleTodoAdd}
      title={title}
      onTitleChange={handleTitleChange}
    />
  )
})

export default TodoListController
