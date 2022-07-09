import TodoList from '@/providers/TodoList'
import { GetServerSideProps } from 'next'
import { todosFixture } from '@/models/domain/__fixtures__/todosFixture'
import { StoreHydration } from '@/types/hydrationTypes'

export default function Home() {
  return <TodoList />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      hydrationData: {
        todosModel: {
          todos: todosFixture,
        },
      } as StoreHydration,
    },
  }
}
