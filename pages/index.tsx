import TodoList from '@/providers/TodoList'
import { GetServerSideProps } from 'next'
import { todosFixture } from '@/models/domain/__fixtures__/todosFixture'
import { WithHydration } from '@/types/hydrationTypes'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [test, setTest] = useState(0)

  return (
    <>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/onboarding">
        <a>온보딩페이지로</a>
      </Link>
      <span>{test}</span>
      <button type="button" onClick={() => setTest((test) => test + 1)}>
        +1 count
      </button>
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
