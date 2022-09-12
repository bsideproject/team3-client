export default function getBirthYearOptions() {
  const currentYear = new Date().getFullYear()
  const baseYear = 1900

  const birthYearOptions = Array.from(Array(currentYear - baseYear + 1).keys())
    .map((idx) => idx + baseYear)
    .sort((a, b) => (a < b ? 1 : -1))
    .map((year) => ({
      value: year as number,
      label: year as number,
    }))

  return birthYearOptions
}
