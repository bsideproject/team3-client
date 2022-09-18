export const getSummarizedCount = (count: number | undefined) => {
  if (!count) {
    return 0
  }

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

export function maskingNickname(nickname: string) {
  let masked = nickname
  if (masked.length > 14) {
    masked = masked.slice(0, 13) + '...'
  }

  return masked
}
