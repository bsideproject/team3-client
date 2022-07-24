import { Todo } from '@/types/todoTypes'
import React from 'react'

type Props = {
  todo: Todo
}

const defaultProps: Partial<Props> = {
  todo: { id: 0, title: 'empty' },
}

const TodoItem = ({ todo }: Props) => {
  return (
    <li>
      id: {todo.id}, title: {todo.title}
    </li>
  )
}

TodoItem.defaultProps = defaultProps

export default TodoItem
