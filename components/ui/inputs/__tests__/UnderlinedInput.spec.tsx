import theme from '@/styles/theme'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import UnderlinedInput, { UnderlinedInputProps } from '../UnderlinedInput'

describe('UnderlinedInput', () => {
  const onChange = jest.fn()
  const onClear = jest.fn()

  const setup = ({
    isError,
    value,
  }: Pick<UnderlinedInputProps, 'isError' | 'value'> = {}) => {
    render(
      <ThemeProvider theme={theme['dark']}>
        <UnderlinedInput
          placeholder="test"
          isError={isError}
          value={value}
          onChange={onChange}
          onClear={onClear}
        />
      </ThemeProvider>
    )
  }

  beforeEach(() => {
    onChange.mockClear()
    onClear.mockClear()
  })

  it('inactivates underline if value is undefined', async () => {
    setup()
    const input = screen.getByPlaceholderText('test')

    expect(input).not.toHaveStyle({ borderBottom: '1px solid transparent' })
  })

  it('activates underline if initialized by value prop', () => {
    setup({ value: 'some value' })

    expect(screen.getByPlaceholderText('test')).toHaveStyle({
      borderBottom: '1px solid transparent',
    })
  })

  it('onChange is called if key pressed', async () => {
    setup()

    await userEvent.type(screen.getByPlaceholderText('test'), 'asd')
    expect(onChange).toHaveBeenCalledTimes(3)
  })

  it('onClear is called if reset button is clicked', async () => {
    setup({ value: 'some value' })

    await userEvent.click(screen.getByAltText('X'))
    expect(onClear).toHaveBeenCalledTimes(1)
  })

  it('redifies underline if isError prop is true', () => {
    setup({ isError: true })

    expect(screen.getByPlaceholderText('test')).toHaveStyle({
      borderBottom: '1px solid #e70000',
    })
  })
})
