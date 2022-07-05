import TodoListController from '@/controllers/TodoListController'
import TodoModel from '@/models/domain/TodosModel'
import { StoreContext } from '@/models/store'
import TodoViewModel from '@/view-models/TodoViewModel'
import React, { Component, useContext, useRef } from 'react'

const TodoList = () => {
  const todoModel = useContext(StoreContext)?.todoModel

  return (
    <StoreContext.Consumer>
      {(value) => <TodoListController todoViewModel={TodoviewModel} />}
    </StoreContext.Consumer>
  )
}

export default TodoList
