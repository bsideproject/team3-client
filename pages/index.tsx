import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'
import { inject } from 'mobx-react'
import Store from '@/models/store'
import TodoList from '@/providers/TodoList'

export default function Home() {
  return <TodoList />
}
