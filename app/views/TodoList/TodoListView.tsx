import { Todo } from '@/types/todoTypes'
import React, { ChangeEventHandler, FormEventHandler } from 'react'
import TodoItem from './TodoItem'

type Props = {
  todoList: Todo[]
  onTodoAdd: FormEventHandler
  title: string
  onTitleChange: ChangeEventHandler
}

const TodoListView = ({ todoList, onTodoAdd, title, onTitleChange }: Props) => {
  return (
    <>
      <form onSubmit={onTodoAdd}>
        <input type="text" name="title" value={title} onChange={onTitleChange} />
        <button type="submit">add</button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  )
}

export default TodoListView
