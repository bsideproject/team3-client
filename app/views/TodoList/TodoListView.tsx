import { Todo } from '@/types/Todo'
import React from 'react'
import TodoItemView from './TodoItemView'

type Props = {
  todoList: Todo[]
}

const TodoListView = ({ todoList }: Props) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItemView key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoListView
