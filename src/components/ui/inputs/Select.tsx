import ReactSelect, { Props, DropdownIndicatorProps, components } from 'react-select'
import styled from 'styled-components'
import ArrowDropdownG40D from '@/components/ui/icons/ArrowDropdownG40D'

const DropdownIndicator = (props: DropdownIndicatorProps) => (
  <components.DropdownIndicator {...props}>
    <ArrowDropdownG40D />
  </components.DropdownIndicator>
)

const Select = (props: Omit<Props, 'classNamePrefix' | 'theme'>) => {
  return (
    <StyledReactSelect
      components={{ DropdownIndicator }}
      classNamePrefix="react-select"
      {...props}
    />
  )
}
export default Select

const StyledReactSelect = styled(ReactSelect)`
  .react-select__control {
    background: none;
    border: 1px solid ${({ theme }) => theme.color.G50D};
    border-radius: 74px;
    height: 50px;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__placeholder {
    ${({ theme }) => theme.typo.HE75}
    color: ${({ theme }) => theme.color.G50D};
  }

  .react-select__value-container {
    padding: 0 15px;
  }

  .react-select__menu {
    background: ${({ theme }) => theme.color.background};
    border: 1px solid ${({ theme }) => theme.color.G50D};
    border-radius: 20px;
    overflow: hidden;
    margin: 9px 0;
    height: 230px;
  }

  .react-select__menu-list {
    padding: 0;
    height: 230px;
  }

  .react-select__input-container {
    ${({ theme }) => theme.typo.HE75}
    color: ${({ theme }) => theme.color.G50D};
  }

  .react-select__option {
    display: flex;
    align-items: center;
    ${({ theme }) => theme.typo.HE75}
    color: ${({ theme }) => theme.color.G50D};
    height: 46px;
    padding: 15px;

    &--is-selected,
    &--is-focused {
      background: ${({ theme }) => theme.color.G80};
      color: ${({ theme }) => theme.color.G20D};
    }

    &:active {
      background: ${({ theme }) => theme.color.G0};
      color: ${({ theme }) => theme.color.G70D};
    }
  }

  .react-select__single-value {
    ${({ theme }) => theme.typo.HE75}
    color: ${({ theme }) => theme.color.G50D};
  }
`
