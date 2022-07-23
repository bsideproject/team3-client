import TodoViewModel from '@/view-models/TodoListViewModel'
import TodoListView from '@/views/TodoList/TodoListView'
import { observer } from 'mobx-react-lite'
import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'

type Props = {
  todoViewModel: TodoViewModel
}

const TodoListController = observer(({ todoViewModel }: Props) => {
  const [title, setTitle] = useState('')

  const handleTodoAdd = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const inputCollection = e.currentTarget.elements
      const titleInput = inputCollection.namedItem('title') as HTMLInputElement
      const titleValue = titleInput.value

      todoViewModel.addTodo(titleValue)
    },
    [todoViewModel]
  )

  const handleTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setTitle(value)
  }, [])

  return (
    <TodoListView
      todoList={todoViewModel.todoList}
      onTodoAdd={handleTodoAdd}
      title={title}
      onTitleChange={handleTitleChange}
    />
  )
})

export default TodoListController
