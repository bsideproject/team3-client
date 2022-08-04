export function isServerSide() {
  return typeof window === 'undefined'
}

export function isError(error: unknown): error is Error {
  return error instanceof Error
}
