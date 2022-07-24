import TodoList from '@/providers/TodoList'
import { GetServerSideProps } from 'next'
import { todosFixture } from '@/models/domain/__fixtures__/todosFixture'
import { WithHydration } from '@/types/hydrationTypes'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <TodoList />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<WithHydration> = async (
  context
) => {
  return {
    props: {
      hydrationData: {
        todosModel: {
          todos: todosFixture,
        },
      },
    },
  }
}
