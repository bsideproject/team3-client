import TodoModel from '@/models/domain/TodoModel'
import { StoreContext, StoreType } from '@/models/store'
import TodoViewModel from '@/view-models/TodoViewModel'
import { observer } from 'mobx-react-lite'
import React, { Component, useContext, useRef } from 'react'

const TodoList = observer(
  class TodoList extends Component {
    render() {
      return <StoreContext.Consumer>{() => 'd'}</StoreContext.Consumer>
    }
  }
)

export default TodoList
