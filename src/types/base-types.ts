export type PaginationResponse<T> = {
  content: Array<T>
  has_next: boolean
  offset: number
  page: number
  size: number
  sort: 'ASC' | 'DESC'
}
