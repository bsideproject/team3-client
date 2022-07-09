import { Todo } from '@/types/todoTypes'
import React from 'react'

type Props = {
  todo: Todo
}

const defaultProps: Partial<Props> = {
  todo: { id: 'empty', title: 'empty' },
}

const TodoItemView = ({ todo }: Props) => {
  return (
    <li>
      id: {todo.id}, title: {todo.title}
    </li>
  )
}

TodoItemView.defaultProps = defaultProps

export default TodoItemView
