export type PaginationResponse<T> = {
  content: Array<T>
  pageable: any
  sort: any
  number: number
  first: boolean
  last: boolean
  numberOfElements: number
  size: number
  empty: boolean
}
