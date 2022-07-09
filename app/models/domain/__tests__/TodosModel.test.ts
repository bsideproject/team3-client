import TodosModel from '@/models/domain/TodosModel'
import service from '@/services/service'

describe('TodosModel', () => {
  let todosModel: TodosModel
  beforeEach(() => {
    todosModel = new TodosModel(service)
  })

  test('아이템을 잘 로드하는가', () => {
    expect(todosModel.todoList).toHaveLength(4)
  })

  test('아이템 하나 추가되는지', async () => {
    await todosModel.create({ id: '5', title: '할일5' })

    expect(todosModel.todoList).toHaveLength(5)
    expect(todosModel.todoList.at(-1)!.title).toBe('할일5')
  })

  test('아이템 한개 삭제되는지', async () => {
    await todosModel.delete({ id: '3', title: '할일3' })

    expect(todosModel.todoList).toHaveLength(3)
    expect(todosModel.todoList.filter((item) => item.id === '3')).not.toHaveLength(1)
  })

  test('하나의 아이템 수정', async () => {
    await todosModel.update({ id: '2', title: '할일22' })

    expect(todosModel.todoList.filter((item) => item.id === '2')[0].title).toBe(
      '할일22'
    )
  })

  test('아이템 전체 삭제', async () => {
    await todosModel.deleteAll()

    expect(todosModel.todoList).toHaveLength(0)
  })
})
