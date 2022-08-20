export const getSummarizedCount = (count: number) => {
  let summarizedCount = count
  let resultString = String(count)

  switch (true) {
    case count >= 10000:
      summarizedCount /= 10000
      resultString = summarizedCount.toFixed(1) + '만'
      break
    case count >= 1000:
      summarizedCount /= 1000
      resultString = summarizedCount.toFixed(1) + '천'
      break
  }

  return resultString
}
