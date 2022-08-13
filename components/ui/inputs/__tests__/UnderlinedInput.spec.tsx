import theme from '@/styles/theme'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import UnderlinedInput, { UnderlinedInputProps } from '../UnderlinedInput'

describe('UnderlinedInput', () => {
  const onChange = jest.fn()
  const onClear = jest.fn()

  const setup = ({
    className,
    isError,
    value,
    onChange,
    onClear,
  }: UnderlinedInputProps = {}) => {
    render(
      <ThemeProvider theme={theme['dark']}>
        <UnderlinedInput
          placeholder="test"
          className={className}
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

  it('changes well', async () => {
    setup({ onChange, onClear })

    const input = screen.getByPlaceholderText('test')
    expect(input).toHaveValue('')
    expect(onChange).not.toHaveBeenCalled()

    await userEvent.type(input, 'some value')
    expect(input).toHaveValue('some value')
    expect(onChange).toHaveBeenCalled()
  })

  it('activates underline if Changed', async () => {
    setup()

    const input = screen.getByPlaceholderText('test')

    // 최초상태
    expect(input).not.toHaveStyle({ borderBottom: '1px solid transparent' })

    // 글 쓸때
    await userEvent.type(input, 'some value')
    expect(input).toHaveStyle({ borderBottom: '1px solid transparent' })
  })

  it('activates underline if initialized by value prop', () => {
    setup({ value: 'some value' })

    expect(screen.getByPlaceholderText('test')).toHaveStyle({
      borderBottom: '1px solid transparent',
    })
  })

  it('inactivates underline if all characters is removed', async () => {
    setup({ value: 'some value' })
    const input = screen.getByPlaceholderText('test')

    await userEvent.type(input, '{backspace}'.repeat(1000))

    expect(input).not.toHaveStyle({ borderBottom: '1px solid transparent' })
  })

  it('inactivates underline if reset button is clicked', async () => {
    setup({ value: 'some value' })

    await userEvent.click(screen.getByAltText('X'))
    expect(screen.getByPlaceholderText('test')).not.toHaveStyle({
      borderBottom: '1px solid transparent',
    })
  })

  it('redifies underline if isError prop is true', () => {
    setup({ isError: true })

    expect(screen.getByPlaceholderText('test')).toHaveStyle({
      borderBottom: '1px solid #e70000',
    })
  })
})
