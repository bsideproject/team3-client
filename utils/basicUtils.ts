export function isServerSide() {
  return typeof window === 'undefined'
}

export function isError(error: unknown): error is Error {
  return error instanceof Error
}

export function readFileAsync(file: Blob) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()

    reader.onload = () => {
      resolve(reader.result)
    }

    reader.onerror = reject

    reader.readAsArrayBuffer(file)
  })
}
